import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ChainReaction3D({ controlRodLevel, isRunning, onStatsUpdate }) {
  const mountRef = useRef(null);
  const animRef = useRef(null);
  const stateRef = useRef({
    fuelGrid: [],
    controlRods: [],
    freeNeutrons: [],
    reactionCount: 0,
    temperature: 300,
    kFactor: 1.0
  });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070913, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 18, 22);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambient);

    const gridLight = new THREE.PointLight(0x00d2ff, 3, 40);
    gridLight.position.set(0, 10, 0);
    scene.add(gridLight);

    // Reactor Core Floor & Grid
    const gridHelper = new THREE.GridHelper(30, 15, 0x00d2ff, 0x1e293b);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // Fuel Cores Assembly (5x5 Grid of U-235 spheres)
    const fuelGeo = new THREE.SphereGeometry(0.8, 20, 20);
    const fuelMat = new THREE.MeshStandardMaterial({
      color: 0xff3b5c,
      metalness: 0.6,
      roughness: 0.2,
      emissive: 0x550011,
      emissiveIntensity: 0.4
    });

    const fuelGrid = [];
    const gridSize = 5;
    const spacing = 4;
    const offset = ((gridSize - 1) * spacing) / 2;

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const mesh = new THREE.Mesh(fuelGeo, fuelMat);
        const posX = x * spacing - offset;
        const posZ = z * spacing - offset;
        mesh.position.set(posX, 0, posZ);
        scene.add(mesh);

        fuelGrid.push({
          mesh,
          pos: new THREE.Vector3(posX, 0, posZ),
          cooldown: 0
        });
      }
    }
    stateRef.current.fuelGrid = fuelGrid;

    // Control Rods Assembly (Cylinders sliding down between fuel elements)
    const rodGeo = new THREE.CylinderGeometry(0.35, 0.35, 12, 16);
    const rodMat = new THREE.MeshStandardMaterial({
      color: 0x475569,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0f172a
    });

    const controlRods = [];
    for (let x = 0; x < gridSize - 1; x++) {
      for (let z = 0; z < gridSize - 1; z++) {
        const rodMesh = new THREE.Mesh(rodGeo, rodMat);
        const posX = x * spacing - offset + spacing / 2;
        const posZ = z * spacing - offset + spacing / 2;
        rodMesh.position.set(posX, 5, posZ); // Initial height above grid
        scene.add(rodMesh);

        controlRods.push({
          mesh: rodMesh,
          basePos: new THREE.Vector3(posX, 0, posZ)
        });
      }
    }
    stateRef.current.controlRods = controlRods;

    // Free Neutrons Pool
    const neutronGeo = new THREE.SphereGeometry(0.2, 12, 12);
    const neutronMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    
    // Spawn initial seed neutrons
    const freeNeutrons = [];
    const spawnNeutron = (pos, vel) => {
      const mesh = new THREE.Mesh(neutronGeo, neutronMat);
      mesh.position.copy(pos);
      scene.add(mesh);
      freeNeutrons.push({
        mesh,
        velocity: vel,
        life: 0
      });
    };

    // Seed 4 initial neutrons traveling across core
    for (let i = 0; i < 4; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        0,
        (Math.random() - 0.5) * 20
      );
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.4,
        0,
        (Math.random() - 0.5) * 0.4
      );
      spawnNeutron(pos, vel);
    }
    stateRef.current.freeNeutrons = freeNeutrons;

    // Mouse Controls
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotY = 0;
    let rotX = 0.5;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      rotY += dx * 0.006;
      rotX = Math.max(0.1, Math.min(1.2, rotX + dy * 0.006));
      prevMouse = { x: e.clientX, y: e.clientY };

      const dist = 30;
      camera.position.x = dist * Math.sin(rotY) * Math.cos(rotX);
      camera.position.y = dist * Math.sin(rotX);
      camera.position.z = dist * Math.cos(rotY) * Math.cos(rotX);
      camera.lookAt(0, 0, 0);
    };

    const onMouseUp = () => { isDragging = false; };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      const dt = clock.getDelta();
      const st = stateRef.current;

      // 1. Update Control Rod positions based on prop slider (0% = withdrawn at Y=6, 100% = inserted at Y=0)
      const rodTargetY = 6 - (controlRodLevel / 100) * 6;
      controlRods.forEach((rod) => {
        rod.mesh.position.y = THREE.MathUtils.lerp(rod.mesh.position.y, rodTargetY, 0.1);
      });

      if (isRunning) {
        // 2. Move Neutrons and check collisions
        for (let i = st.freeNeutrons.length - 1; i >= 0; i--) {
          const n = st.freeNeutrons[i];
          n.mesh.position.add(n.velocity);
          n.life += dt;

          // Out of bounds cleanup
          if (n.mesh.position.length() > 22 || n.life > 6) {
            scene.remove(n.mesh);
            n.mesh.geometry.dispose();
            st.freeNeutrons.splice(i, 1);
            continue;
          }

          // Check absorption by Control Rods
          let absorbed = false;
          controlRods.forEach((rod) => {
            if (absorbed) return;
            const dist = n.mesh.position.distanceTo(rod.mesh.position);
            // If control rod is inserted in Y range [-4, 6] and distance < 1.0
            if (dist < 1.2 && rod.mesh.position.y <= 4) {
              absorbed = true;
            }
          });

          if (absorbed) {
            scene.remove(n.mesh);
            n.mesh.geometry.dispose();
            st.freeNeutrons.splice(i, 1);
            continue;
          }

          // Check collision with Fuel Cores
          fuelGrid.forEach((fuel) => {
            const d = n.mesh.position.distanceTo(fuel.pos);
            if (d < 1.2 && fuel.cooldown <= 0) {
              fuel.cooldown = 1.0; // cooldown seconds before next fission
              st.reactionCount++;
              st.temperature += 2.5;

              // Emissive pulse on fission
              fuel.mesh.material.emissive.setHex(0xffbe0b);
              fuel.mesh.material.emissiveIntensity = 2.0;

              // Spawn 2-3 prompt neutrons
              const newCount = Math.floor(Math.random() * 2) + 2;
              for (let k = 0; k < newCount; k++) {
                const randAngle = Math.random() * Math.PI * 2;
                const speed = 0.3 + Math.random() * 0.2;
                const v = new THREE.Vector3(
                  Math.cos(randAngle) * speed,
                  0,
                  Math.sin(randAngle) * speed
                );
                spawnNeutron(fuel.pos.clone(), v);
              }
            }
          });
        }

        // Cool down fuel pulse emissive
        fuelGrid.forEach((fuel) => {
          if (fuel.cooldown > 0) {
            fuel.cooldown -= dt;
            fuel.mesh.material.emissive.lerp(new THREE.Color(0x550011), 0.05);
            fuel.mesh.material.emissiveIntensity = THREE.MathUtils.lerp(
              fuel.mesh.material.emissiveIntensity,
              0.4,
              0.05
            );
          }
        });

        // Core natural cooling
        st.temperature = Math.max(300, st.temperature - dt * 1.2);

        // Maintain minimum neutron flux if depleted
        if (st.freeNeutrons.length < 2 && Math.random() < 0.05) {
          const randPos = new THREE.Vector3(
            (Math.random() - 0.5) * 15,
            0,
            (Math.random() - 0.5) * 15
          );
          const randV = new THREE.Vector3(
            (Math.random() - 0.5) * 0.3,
            0,
            (Math.random() - 0.5) * 0.3
          );
          spawnNeutron(randPos, randV);
        }

        // Calculate Effective Multiplication Factor k_eff
        // k_eff ~ 1.0 at ~60% rod insertion
        const effectiveK = Number((1.65 - (controlRodLevel / 100) * 1.1).toFixed(2));
        st.kFactor = effectiveK;

        // Callback to parent React UI
        if (onStatsUpdate) {
          onStatsUpdate({
            neutronCount: st.freeNeutrons.length,
            reactionTotal: st.reactionCount,
            temperature: Math.round(st.temperature),
            keff: effectiveK
          });
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [controlRodLevel, isRunning]);

  return (
    <div 
      ref={mountRef} 
      style={{ width: '100%', height: '100%', position: 'relative', cursor: 'grab' }} 
    />
  );
}
