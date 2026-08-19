import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Nucleus3D({ phase, speed, showForces, isPlaying, onPhaseComplete }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animFrameRef = useRef(null);

  // Simulation state refs
  const stateRef = useRef({
    time: 0,
    phaseProgress: 0, // 0 to 1 inside current phase
    nucleons: [],
    incidentNeutron: null,
    promptNeutrons: [],
    fragments: { left: null, right: null },
     shockwaves: [],
    forceArrows: [],
    gluonField: null
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
    
    // Proton material (glowing ruby)
    const protonMat = new THREE.MeshStandardMaterial({
      color: 0xff3b5c,
      roughness: 0.2,
      metalness: 0.5,
      emissive: 0x88001b,
      emissiveIntensity: 0.5
    });

    // Neutron material (ice blue)
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
      
      // Fibonacci sphere layout for compact nucleus shape
      const phi = Math.acos(1 - 2 * (i + 0.5) / totalNucleons);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const r = baseRadius * Math.pow(Math.random(), 0.3); // dense cluster
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Store initial relative offsets for deformation calculation
      nucleonInstances.push({
        mesh,
        basePos: new THREE.Vector3(x, y, z),
        isProton,
        cluster: i % 2 === 0 ? 'left' : 'right', // assigned split lobe
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

    // Incident Neutron Mesh
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

    // Prompt Neutrons (created during scission)
    const promptGroup = new THREE.Group();
    scene.add(promptGroup);
    stateRef.current.promptNeutronsGroup = promptGroup;

    // Shockwave Rings Group
    const shockwaveGroup = new THREE.Group();
    scene.add(shockwaveGroup);
    stateRef.current.shockwaveGroup = shockwaveGroup;

    // Force Arrows Group
    const forceGroup = new THREE.Group();
    scene.add(forceGroup);
    stateRef.current.forceGroup = forceGroup;

    // Create static force vectors (Strong Force inward, Coulomb outward)
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

    // Resize handler
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

      // Force arrows visibility
      forceGroup.visible = showForces && (phase === 1 || phase === 3);

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
        const stretchFactor = 1 + Math.sin(t * 3) * 0.75 + 0.5; // Stretch along X axis
        const pinchFactor = 1 / Math.sqrt(Math.max(0.2, stretchFactor)); // Neck constriction

        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const offsetX = item.basePos.x * stretchFactor + dir * (stretchFactor - 1) * 1.8;
          const offsetY = item.basePos.y * pinchFactor;
          const offsetZ = item.basePos.z * pinchFactor;
          item.mesh.position.set(offsetX, offsetY, offsetZ);
        });

        gluonField.scale.set(stretchFactor * 1.2, pinchFactor * 0.9, pinchFactor * 0.9);
      }

      // Phase 4: Scission & Splitting into Ba-142 and Kr-91
      else if (phase === 4) {
        incidentNeutron.position.set(-25, 0, 0);
        gluonField.visible = false;

        const sep = Math.min(15, (t % 6) * 3); // Separation distance

        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const sepX = item.basePos.x + dir * (sep + 1.5);
          item.mesh.position.set(sepX, item.basePos.y, item.basePos.z);
        });

        // Flash & shockwave
        pointLight.intensity = Math.max(0, 5 - (t % 6));
        redLight.intensity = Math.max(0, 5 - (t % 6));
      }

      // Phase 5: Energy Bloom & Prompt Neutrons Ejection
      else if (phase === 5) {
        incidentNeutron.position.set(-25, 0, 0);
        gluonField.visible = false;
        const sep = 16;

        st.nucleons.forEach((item) => {
          const dir = item.cluster === 'left' ? -1 : 1;
          const sepX = item.basePos.x + dir * sep;
          const rotY = t * 0.5;
          item.mesh.position.set(sepX, item.basePos.y, item.basePos.z);
        });
      }

      // Rotate whole nucleus group gently
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
