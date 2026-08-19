import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Nucleus3D({ phase, speed, showForces, isPlaying, onPhaseComplete }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animFrameRef = useRef(null);

  // Simulation state refs
  const stateRef = useRef({
    time: 0,
    nucleons: [],
    incidentNeutron: null,
    promptNeutrons: [],
    radiationWaves: [],
    gluonField: null,
    forceGroup: null
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070913, 0.015);
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 5, 25);
    camera.lookAt(0, 0, 0);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(10, 20, 15);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x00d2ff, 2, 50);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const redLight = new THREE.PointLight(0xff3b5c, 2, 50);
    redLight.position.set(0, 0, 0);
    scene.add(redLight);

    // 5. Materials & Geometries
    const sphereGeo = new THREE.SphereGeometry(0.35, 16, 16);
    
    // Proton material (glowing ruby red)
    const protonMat = new THREE.MeshStandardMaterial({
      color: 0xff3b5c,
      roughness: 0.2,
      metalness: 0.5,
      emissive: 0x88001b,
      emissiveIntensity: 0.5
    });

    // Bound Neutron material (ice blue inside U-235)
    const neutronMat = new THREE.MeshStandardMaterial({
      color: 0x00d2ff,
      roughness: 0.2,
      metalness: 0.4,
      emissive: 0x005f73,
      emissiveIntensity: 0.5
    });

    // Create 92 Protons and 143 Neutrons for U-235 (235 total spheres)
    const totalNucleons = 235;
    const protonsCount = 92;
    const nucleonsGroup = new THREE.Group();
    scene.add(nucleonsGroup);

    const nucleonInstances = [];
    const baseRadius = 2.8;

    for (let i = 0; i < totalNucleons; i++) {
      const isProton = i < protonsCount;
      const mesh = new THREE.Mesh(sphereGeo, isProton ? protonMat : neutronMat);
      
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalNucleons);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const r = baseRadius * Math.pow(Math.random(), 0.3);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      nucleonInstances.push({
        mesh,
        basePos: new THREE.Vector3(x, y, z),
        isProton,
        cluster: i % 2 === 0 ? 'left' : 'right',
        offsetSpeed: Math.random() * 2 + 1,
        seed: Math.random() * 100
      });

      nucleonsGroup.add(mesh);
    }
    stateRef.current.nucleons = nucleonInstances;

    // Outer Translucent Gluon / Binding Energy Field
    const fieldGeo = new THREE.SphereGeometry(baseRadius * 1.25, 32, 32);
    const fieldMat = new THREE.MeshPhongMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
      blending: THREE.AdditiveBlending
    });
    const gluonField = new THREE.Mesh(fieldGeo, fieldMat);
    scene.add(gluonField);
    stateRef.current.gluonField = gluonField;

    // Incident Neutron Mesh (incoming thermal neutron)
    const incidentGeo = new THREE.SphereGeometry(0.4, 16, 16);
    const incidentMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x00d2ff,
      emissiveIntensity: 1.2
    });
    const incidentNeutron = new THREE.Mesh(incidentGeo, incidentMat);
    incidentNeutron.position.set(-25, 0, 0);
    scene.add(incidentNeutron);
    stateRef.current.incidentNeutron = incidentNeutron;

    // --- 3 RELEASED FREE NEUTRONS (BRIGHT YELLOW SPHERES RELEASED ON FISSION) ---
    const promptNeutronsGroup = new THREE.Group();
    scene.add(promptNeutronsGroup);

    const yellowNeutronGeo = new THREE.SphereGeometry(0.5, 20, 20);
    const yellowNeutronMat = new THREE.MeshStandardMaterial({
      color: 0xffbe0b,            // Bright yellow
      emissive: 0xffaa00,         // Glowing amber/yellow
      emissiveIntensity: 2.5,
      roughness: 0.1,
      metalness: 0.3
    });

    const promptDirections = [
      new THREE.Vector3(0.4, 1.2, 0.5).normalize(),   // Up-Right-Front
      new THREE.Vector3(-0.5, -1.0, 0.6).normalize(), // Down-Left-Front
      new THREE.Vector3(0.1, 0.4, -1.3).normalize()   // Backwards-Up
    ];

    const promptNeutronMeshes = promptDirections.map((dir, idx) => {
      const mesh = new THREE.Mesh(yellowNeutronGeo, yellowNeutronMat);
      
      const pLight = new THREE.PointLight(0xffbe0b, 2.0, 8);
      mesh.add(pLight);

      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        dir.clone().multiplyScalar(-3.5)
      ]);
      const lineMat = new THREE.LineBasicMaterial({ 
        color: 0xffbe0b, 
        transparent: true, 
        opacity: 0.85 
      });
      const trail = new THREE.Line(lineGeo, lineMat);
      mesh.add(trail);

      promptNeutronsGroup.add(mesh);
      return { mesh, dir, id: idx };
    });
    stateRef.current.promptNeutrons = promptNeutronMeshes;

    // --- RADIATION WAVES (SINE WAVE BEAMS RUSHING OUTWARDS IN 8 DIRECTIONS) ---
    const radGroup = new THREE.Group();
    scene.add(radGroup);

    // 8 3D radial directions for gamma radiation waves
    const radDirs = [
      new THREE.Vector3(1, 0.5, 0.3).normalize(),
      new THREE.Vector3(-1, 0.6, -0.4).normalize(),
      new THREE.Vector3(0.2, 1, 0.6).normalize(),
      new THREE.Vector3(-0.3, -1, -0.5).normalize(),
      new THREE.Vector3(0.7, -0.5, 1).normalize(),
      new THREE.Vector3(-0.6, 0.4, -1).normalize(),
      new THREE.Vector3(0.8, -0.8, -0.3).normalize(),
      new THREE.Vector3(-0.7, 0.7, 0.8).normalize()
    ];

    const pointsPerRay = 45;
    const radiationRays = radDirs.map((dir) => {
      const positions = new Float32Array(pointsPerRay * 3);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const mat = new THREE.LineBasicMaterial({
        color: 0xc084fc, // glowing violet/magenta radiation wave
        transparent: true,
        opacity: 0.9,
        linewidth: 2
      });

      const line = new THREE.Line(geo, mat);
      radGroup.add(line);

      // Create perpendicular vectors for transverse sine wave oscillation
      const up = new THREE.Vector3(0, 1, 0);
      const perp1 = new THREE.Vector3().crossVectors(dir, up).normalize();
      if (perp1.lengthSq() < 0.001) perp1.set(1, 0, 0);
      const perp2 = new THREE.Vector3().crossVectors(dir, perp1).normalize();

      return { line, dir, perp1, perp2, geo, positions };
    });
    stateRef.current.radiationWaves = radiationRays;

    // Force Arrows Group
    const forceGroup = new THREE.Group();
    scene.add(forceGroup);
    stateRef.current.forceGroup = forceGroup;

    const arrowDirUp = new THREE.Vector3(0, 1, 0);
    const arrowDirDown = new THREE.Vector3(0, -1, 0);
    const arrowStrong = new THREE.ArrowHelper(arrowDirDown, new THREE.Vector3(0, 4, 0), 2.5, 0x00ff88, 0.6, 0.4);
    const arrowCoulomb = new THREE.ArrowHelper(arrowDirUp, new THREE.Vector3(0, 1.5, 0), 3.0, 0xff3b5c, 0.6, 0.4);
    forceGroup.add(arrowStrong);
    forceGroup.add(arrowCoulomb);

    // Camera Orbit state
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let cameraAngleX = 0;
    let cameraAngleY = 0.2;
    let cameraDistance = 25;

    const updateCameraPosition = () => {
      camera.position.x = cameraDistance * Math.sin(cameraAngleX) * Math.cos(cameraAngleY);
      camera.position.y = cameraDistance * Math.sin(cameraAngleY);
      camera.position.z = cameraDistance * Math.cos(cameraAngleX) * Math.cos(cameraAngleY);
      camera.lookAt(0, 0, 0);
    };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      cameraAngleX -= deltaX * 0.008;
      cameraAngleY = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, cameraAngleY + deltaY * 0.008));

      updateCameraPosition();
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => { isDragging = false; };

    const onWheel = (e) => {
      cameraDistance = Math.max(10, Math.min(60, cameraDistance + e.deltaY * 0.03));
      updateCameraPosition();
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElem.addEventListener('wheel', onWheel);

    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const st = stateRef.current;

      if (isPlaying) {
        st.time += delta * speed;
      }

      const t = st.time;

      forceGroup.visible = showForces && (phase === 1 || phase === 3);

      promptNeutronsGroup.visible = false;
      radGroup.visible = false;

      // Phase 1: Equilibrium Quantum Jitter
      if (phase === 1) {
        incidentNeutron.position.set(-25, 0, 0);
        st.nucleons.forEach((item) => {
          const jitterX = Math.sin(t * 4 + item.seed) * 0.12;
          const jitterY = Math.cos(t * 3 + item.seed) * 0.12;
          const jitterZ = Math.sin(t * 5 + item.seed) * 0.12;
          item.mesh.position.set(item.basePos.x + jitterX, item.basePos.y + jitterY, item.basePos.z + jitterZ);
        });
        nucleonsGroup.position.set(0, 0, 0);
        gluonField.position.set(0, 0, 0);
        gluonField.scale.set(1, 1, 1);
        gluonField.visible = true;
      }

      // Phase 2: Incident Neutron Approach & Impact
      else if (phase === 2) {
        const progress = Math.min(1, (t % 4) / 4);
        const neutronX = THREE.MathUtils.lerp(-25, -2.5, progress);
        incidentNeutron.position.set(neutronX, 0, 0);

        st.nucleons.forEach((item) => {
          const jitterX = Math.sin(t * 8 + item.seed) * 0.15;
          const jitterY = Math.cos(t * 7 + item.seed) * 0.15;
          item.mesh.position.set(item.basePos.x + jitterX, item.basePos.y + jitterY, item.basePos.z);
        });
      }

      // Phase 3: Deformation & Necking (Liquid Drop stretching)
      else if (phase === 3) {
        incidentNeutron.position.set(-25, 0, 0);
        const stretchFactor = 1 + Math.sin(t * 3) * 0.75 + 0.5;
        const pinchFactor = 1 / Math.sqrt(Math.max(0.2, stretchFactor));

        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const offsetX = item.basePos.x * stretchFactor + dir * (stretchFactor - 1) * 1.8;
          const offsetY = item.basePos.y * pinchFactor;
          const offsetZ = item.basePos.z * pinchFactor;
          item.mesh.position.set(offsetX, offsetY, offsetZ);
        });

        gluonField.scale.set(stretchFactor * 1.2, pinchFactor * 0.9, pinchFactor * 0.9);
      }

      // Phase 4: Scission & Radiation Waves + 3 Yellow Free Neutrons
      else if (phase === 4) {
        incidentNeutron.position.set(-25, 0, 0);
        gluonField.visible = false;

        const loopT = (t % 5);
        const sep = Math.min(15, loopT * 3.5);

        // Split nucleus lobes into Ba-142 & Kr-91
        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const sepX = item.basePos.x + dir * (sep + 1.5);
          item.mesh.position.set(sepX, item.basePos.y, item.basePos.z);
        });

        // 3 Yellow Free Neutrons flying apart
        promptNeutronsGroup.visible = true;
        st.promptNeutrons.forEach((p) => {
          const dist = loopT * 7.5;
          p.mesh.position.copy(p.dir.clone().multiplyScalar(dist));
        });

        // --- ANIMATE DYNAMIC SINE WAVE RADIATION RAYS RUSHING OUTWARDS ---
        radGroup.visible = true;
        const waveSpeed = 16.0; // High speed radiation propagation
        const frequency = 2.5;
        const maxDist = Math.min(30, loopT * waveSpeed);

        st.radiationWaves.forEach((ray) => {
          const posArr = ray.positions;
          const numP = pointsPerRay;

          for (let p = 0; p < numP; p++) {
            const fraction = p / (numP - 1);
            const r = fraction * maxDist;

            // Sine wave transverse displacement: amplitude peaks and oscillates
            const amp = Math.sin(fraction * Math.PI) * 0.7; 
            const waveValue = Math.sin(r * frequency - t * 18);

            const pointPos = ray.dir.clone().multiplyScalar(r)
              .add(ray.perp1.clone().multiplyScalar(waveValue * amp))
              .add(ray.perp2.clone().multiplyScalar(Math.cos(r * frequency - t * 18) * amp * 0.5));

            posArr[p * 3] = pointPos.x;
            posArr[p * 3 + 1] = pointPos.y;
            posArr[p * 3 + 2] = pointPos.z;
          }

          ray.geo.attributes.position.needsUpdate = true;
          ray.line.material.opacity = Math.max(0, 1.0 - loopT / 5);
        });

        pointLight.intensity = Math.max(0, 5 - loopT);
        redLight.intensity = Math.max(0, 5 - loopT);
      }

      // Phase 5: Fission Products with continuous radiation waves
      else if (phase === 5) {
        incidentNeutron.position.set(-25, 0, 0);
        gluonField.visible = false;
        const sep = 16;

        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const sepX = item.basePos.x + dir * sep;
          item.mesh.position.set(sepX, item.basePos.y, item.basePos.z);
        });

        promptNeutronsGroup.visible = true;
        st.promptNeutrons.forEach((p) => {
          const dist = 22 + Math.sin(t * 2 + p.id) * 3;
          p.mesh.position.copy(p.dir.clone().multiplyScalar(dist));
        });

        // Continuous radiation sine waves rushing into space
        radGroup.visible = true;
        const maxDist = 32;

        st.radiationWaves.forEach((ray) => {
          const posArr = ray.positions;
          const numP = pointsPerRay;

          for (let p = 0; p < numP; p++) {
            const fraction = p / (numP - 1);
            const r = fraction * maxDist;
            const amp = Math.sin(fraction * Math.PI) * 0.6;
            const waveValue = Math.sin(r * 2.2 - t * 16);

            const pointPos = ray.dir.clone().multiplyScalar(r)
              .add(ray.perp1.clone().multiplyScalar(waveValue * amp));

            posArr[p * 3] = pointPos.x;
            posArr[p * 3 + 1] = pointPos.y;
            posArr[p * 3 + 2] = pointPos.z;
          }

          ray.geo.attributes.position.needsUpdate = true;
          ray.line.material.opacity = 0.8;
        });
      }

      nucleonsGroup.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      domElem.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElem.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [phase, speed, showForces, isPlaying]);

  return (
    <div 
      ref={mountRef} 
      style={{ width: '100%', height: '100%', position: 'relative', cursor: 'grab' }} 
    />
  );
}
