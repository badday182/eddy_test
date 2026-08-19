import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function Nucleus3D({ phase, speed, showForces, isPlaying, onPhaseComplete }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const animFrameRef = useRef(null);
  const [labels, setLabels] = useState([]);

  // Simulation state refs
  const stateRef = useRef({
    time: 0,
    baNucleons: [],
    krNucleons: [],
    centerNeutrons: [],
    incidentNeutron: null,
    promptNeutrons: [],
    radiationWaves: [],
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

    // --- BARIUM-142 NUCLEUS CLUSTER (142 nucleons: 56p + 86n) ---
    const baGroup = new THREE.Group();
    scene.add(baGroup);

    const baTotal = 142;
    const baProtons = 56;
    const baNucleons = [];
    const baRadius = 2.3;

    for (let i = 0; i < baTotal; i++) {
      const isProton = i < baProtons;
      const mesh = new THREE.Mesh(sphereGeo, isProton ? protonMat : neutronMat);

      const phi = Math.acos(1 - 2 * (i + 0.5) / baTotal);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const r = baRadius * Math.pow(Math.random(), 0.35);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      baNucleons.push({
        mesh,
        basePos: new THREE.Vector3(x, y, z),
        seed: Math.random() * 100
      });
      baGroup.add(mesh);
    }
    stateRef.current.baNucleons = baNucleons;
    stateRef.current.baGroup = baGroup;

    // --- KRYPTON-91 NUCLEUS CLUSTER (91 nucleons: 36p + 55n) ---
    const krGroup = new THREE.Group();
    scene.add(krGroup);

    const krTotal = 91;
    const krProtons = 36;
    const krNucleons = [];
    const krRadius = 1.9;

    for (let i = 0; i < krTotal; i++) {
      const isProton = i < krProtons;
      const mesh = new THREE.Mesh(sphereGeo, isProton ? protonMat : neutronMat);

      const phi = Math.acos(1 - 2 * (i + 0.5) / krTotal);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      const r = krRadius * Math.pow(Math.random(), 0.35);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      mesh.position.set(x, y, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      krNucleons.push({
        mesh,
        basePos: new THREE.Vector3(x, y, z),
        seed: Math.random() * 100
      });
      krGroup.add(mesh);
    }
    stateRef.current.krNucleons = krNucleons;
    stateRef.current.krGroup = krGroup;

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
        color: 0xc084fc,
        transparent: true,
        opacity: 0.9,
        linewidth: 2
      });

      const line = new THREE.Line(geo, mat);
      radGroup.add(line);

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

    // Helper: Project 3D vector to screen (X, Y)
    const projectToScreen = (v3) => {
      const p = v3.clone().project(camera);
      const w = container.clientWidth;
      const h = container.clientHeight;
      return {
        x: (p.x * 0.5 + 0.5) * w,
        y: (-(p.y * 0.5) + 0.5) * h,
        visible: p.z < 1.0
      };
    };

    // Render loop
    let clock = new THREE.Clock();
    let frameCounter = 0;

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

      let currentLabels = [];

      // --- PHASE 1: Equilibrium U-235 (Ba-142 and Kr-91 clusters fully overlapping at origin) ---
      if (phase === 1) {
        incidentNeutron.position.set(-25, 0, 0);

        // Position Ba-142 cluster at X = -0.8, Kr-91 cluster at X = +0.8 (merged/overlapping)
        baGroup.position.set(-0.8, 0, 0);
        krGroup.position.set(0.8, 0, 0);

        st.baNucleons.forEach((item) => {
          const jX = Math.sin(t * 4 + item.seed) * 0.1;
          const jY = Math.cos(t * 3 + item.seed) * 0.1;
          item.mesh.position.set(item.basePos.x + jX, item.basePos.y + jY, item.basePos.z);
        });
        st.krNucleons.forEach((item) => {
          const jX = Math.sin(t * 4.5 + item.seed) * 0.1;
          const jY = Math.cos(t * 3.5 + item.seed) * 0.1;
          item.mesh.position.set(item.basePos.x + jX, item.basePos.y + jY, item.basePos.z);
        });

        const mainPos = projectToScreen(new THREE.Vector3(0, 4.2, 0));
        if (mainPos.visible) {
          currentLabels.push({
            id: 'u235',
            title: 'Атом Урану-235 (²³⁵U)',
            details: 'Суміщені ядра Барію (56p) та Криптону (36p)',
            badge: '92p⁺ + 143n⁰ (235 нуклонів)',
            color: '#00d2ff',
            x: mainPos.x,
            y: mainPos.y
          });
        }
      }

      // --- PHASE 2: Incident Thermal Neutron Capture ---
      else if (phase === 2) {
        const progress = Math.min(1, (t % 4) / 4);
        const neutronX = THREE.MathUtils.lerp(-25, -2.5, progress);
        incidentNeutron.position.set(neutronX, 0, 0);

        baGroup.position.set(-0.8, 0, 0);
        krGroup.position.set(0.8, 0, 0);

        st.baNucleons.forEach((item) => {
          const jX = Math.sin(t * 7 + item.seed) * 0.12;
          item.mesh.position.set(item.basePos.x + jX, item.basePos.y, item.basePos.z);
        });
        st.krNucleons.forEach((item) => {
          const jX = Math.sin(t * 7.5 + item.seed) * 0.12;
          item.mesh.position.set(item.basePos.x + jX, item.basePos.y, item.basePos.z);
        });

        const nPos = projectToScreen(new THREE.Vector3(neutronX, 1.2, 0));
        if (nPos.visible) {
          currentLabels.push({
            id: 'n_inc',
            title: 'Тепловий Нейтрон (n⁰)',
            details: 'Влучання в суміщені ядра',
            badge: '1n⁰ (E = 0.025 еВ)',
            color: '#5ce1e6',
            x: nPos.x,
            y: nPos.y
          });
        }

        const targetPos = projectToScreen(new THREE.Vector3(0, 4.2, 0));
        if (targetPos.visible) {
          currentLabels.push({
            id: 'u236',
            title: 'Збуджене ядро Урану-236 (*)',
            details: '92 протони | 144 нейтрони (E_ex = 6.5 МеВ)',
            badge: '92p⁺ + 144n⁰',
            color: '#ff3b5c',
            x: targetPos.x,
            y: targetPos.y
          });
        }
      }

      // --- PHASE 3: Overlapping & Separation Initiation (Ba-142 and Kr-91 starting to slide apart from overlapping state) ---
      else if (phase === 3) {
        incidentNeutron.position.set(-25, 0, 0);

        // Slide Ba-142 to -2.8 and Kr-91 to +2.8 (partially overlapping at boundaries)
        const overlapSep = 1.2 + Math.sin(t * 3) * 1.5; 
        baGroup.position.set(-overlapSep, 0, 0);
        krGroup.position.set(overlapSep, 0, 0);

        const leftLobePos = projectToScreen(new THREE.Vector3(-overlapSep - 1.0, 3.8, 0));
        if (leftLobePos.visible) {
          currentLabels.push({
            id: 'ba_lobe',
            title: 'Ядро Барію-142 (¹⁴²Ba)',
            details: 'Накладається на ядро Криптону',
            badge: '56p⁺ + 86n⁰',
            color: '#a855f7',
            x: leftLobePos.x,
            y: leftLobePos.y
          });
        }

        const rightLobePos = projectToScreen(new THREE.Vector3(overlapSep + 1.0, 3.8, 0));
        if (rightLobePos.visible) {
          currentLabels.push({
            id: 'kr_lobe',
            title: 'Ядро Криптону-91 (⁹¹Kr)',
            details: 'Початок кулонівського відштовхування',
            badge: '36p⁺ + 55n⁰',
            color: '#38bdf8',
            x: rightLobePos.x,
            y: rightLobePos.y
          });
        }
      }

      // --- PHASE 4: Scission & Rapid Flight Apart + 3 Yellow Free Neutrons & Sine Radiation Rays ---
      else if (phase === 4) {
        incidentNeutron.position.set(-25, 0, 0);

        const loopT = (t % 5);
        const flySep = 2.0 + loopT * 3.8; // Separation distance

        baGroup.position.set(-flySep, 0, 0);
        krGroup.position.set(flySep, 0, 0);

        // 3 Yellow Free Neutrons flying apart
        promptNeutronsGroup.visible = true;
        st.promptNeutrons.forEach((p, idx) => {
          const dist = loopT * 7.5;
          const pos = p.dir.clone().multiplyScalar(dist);
          p.mesh.position.copy(pos);

          if (idx === 0) {
            const screenP = projectToScreen(pos.clone().add(new THREE.Vector3(0, 0.8, 0)));
            if (screenP.visible) {
              currentLabels.push({
                id: `free_n_${idx}`,
                title: '3 Вільні Нейтрони (n⁰)',
                details: 'Жовті кульки розлітаються у просторі',
                badge: '3 × 1n⁰ (E = 2 МеВ)',
                color: '#ffbe0b',
                x: screenP.x,
                y: screenP.y
              });
            }
          }
        });

        // Dynamic sine wave radiation rays
        radGroup.visible = true;
        const waveSpeed = 16.0;
        const frequency = 2.5;
        const maxDist = Math.min(30, loopT * waveSpeed);

        st.radiationWaves.forEach((ray) => {
          const posArr = ray.positions;
          const numP = pointsPerRay;
          for (let p = 0; p < numP; p++) {
            const fraction = p / (numP - 1);
            const r = fraction * maxDist;
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

        // Labels for Ba-142 & Kr-91 flying apart
        const baPos = projectToScreen(new THREE.Vector3(-flySep, 3.5, 0));
        if (baPos.visible) {
          currentLabels.push({
            id: 'ba142',
            title: 'Атом Барію-142 (¹⁴²Ba)',
            details: '56 протонів | 86 нейтронів',
            badge: '56p⁺ + 86n⁰',
            color: '#a855f7',
            x: baPos.x,
            y: baPos.y
          });
        }

        const krPos = projectToScreen(new THREE.Vector3(flySep, 3.5, 0));
        if (krPos.visible) {
          currentLabels.push({
            id: 'kr91',
            title: 'Атом Криптону-91 (⁹¹Kr)',
            details: '36 протонів | 55 нейтронів',
            badge: '36p⁺ + 55n⁰',
            color: '#38bdf8',
            x: krPos.x,
            y: krPos.y
          });
        }

        pointLight.intensity = Math.max(0, 5 - loopT);
        redLight.intensity = Math.max(0, 5 - loopT);
      }

      // --- PHASE 5: Fission Products (Ba-142 + Kr-91 + 3 Yellow Free Neutrons in space) ---
      else if (phase === 5) {
        incidentNeutron.position.set(-25, 0, 0);

        baGroup.position.set(-17, 0, 0);
        krGroup.position.set(17, 0, 0);

        promptNeutronsGroup.visible = true;
        st.promptNeutrons.forEach((p, idx) => {
          const dist = 22 + Math.sin(t * 2 + p.id) * 3;
          const pos = p.dir.clone().multiplyScalar(dist);
          p.mesh.position.copy(pos);

          if (idx === 0) {
            const screenP = projectToScreen(pos.clone().add(new THREE.Vector3(0, 0.8, 0)));
            if (screenP.visible) {
              currentLabels.push({
                id: `free_n_${idx}`,
                title: '3 Вільні Нейтрони (n⁰)',
                details: 'Жовті кульки розлітаються',
                badge: '3 × 1n⁰',
                color: '#ffbe0b',
                x: screenP.x,
                y: screenP.y
              });
            }
          }
        });

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

        const baPos = projectToScreen(new THREE.Vector3(-17, 3.8, 0));
        if (baPos.visible) {
          currentLabels.push({
            id: 'ba142_final',
            title: 'Атом Барію-142 (¹⁴²Ba)',
            details: '56 протонів | 86 нейтронів',
            badge: '56p⁺ + 86n⁰',
            color: '#a855f7',
            x: baPos.x,
            y: baPos.y
          });
        }

        const krPos = projectToScreen(new THREE.Vector3(17, 3.8, 0));
        if (krPos.visible) {
          currentLabels.push({
            id: 'kr91_final',
            title: 'Атом Криптону-91 (⁹¹Kr)',
            details: '36 протонів | 55 нейтронів',
            badge: '36p⁺ + 55n⁰',
            color: '#38bdf8',
            x: krPos.x,
            y: krPos.y
          });
        }
      }

      baGroup.rotation.y += 0.003;
      krGroup.rotation.y += 0.003;

      frameCounter++;
      if (frameCounter % 2 === 0) {
        setLabels(currentLabels);
      }

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
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div 
        ref={mountRef} 
        style={{ width: '100%', height: '100%', position: 'relative', cursor: 'grab' }} 
      />

      {/* 2D HTML/CSS Glassmorphic Element Labels Overlaid in 3D Space */}
      {labels.map((item) => (
        <div
          key={item.id}
          className="glass-panel"
          style={{
            position: 'absolute',
            left: `${item.x}px`,
            top: `${item.y}px`,
            transform: 'translate(-50%, -100%)',
            pointerEvents: 'none',
            zIndex: 25,
            padding: '0.4rem 0.75rem',
            border: `1px solid ${item.color}`,
            borderRadius: '8px',
            boxShadow: `0 0 15px ${item.color}40`,
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
            {item.title}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-body)', margin: '2px 0' }}>
            {item.details}
          </div>
          <span className="badge" style={{ background: `${item.color}25`, color: item.color, border: `1px solid ${item.color}50`, padding: '1px 6px', fontSize: '0.7rem' }}>
            {item.badge}
          </span>
        </div>
      ))}
    </div>
  );
}
