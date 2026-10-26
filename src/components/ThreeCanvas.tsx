import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCanvasProps {
  className?: string;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects for coordinated rotation
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 2. Central 3D Icosahedron Wireframe Core (Cyan)
    const coreGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x22e6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, wireframeMaterial);
    coreGroup.add(coreMesh);

    // 3. Inner Solid Core with Subtle Depth (Azure)
    const innerGeometry = new THREE.OctahedronGeometry(2.5, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x2f6bff,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreGroup.add(innerMesh);

    // 4. Orbital Ring 1 (Data Layer Ring - Tilted)
    const ring1Geo = new THREE.TorusGeometry(6.2, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x22e6ff,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    // 5. Orbital Ring 2 (Services / AI Layer Ring - Counter Tilted)
    const ring2Geo = new THREE.TorusGeometry(7.8, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9b4dff,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    coreGroup.add(ring2);

    // 6. 3D Particle Cloud (Connected Nodes)
    const particleCount = prefersReducedMotion ? 120 : 280;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x22e6ff), // Cyan
      new THREE.Color(0x2f6bff), // Azure
      new THREE.Color(0x9b4dff), // Violet
      new THREE.Color(0xf4f7ff), // Cloud White
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = THREE.MathUtils.randFloat(5.5, 12.5);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0, Math.PI);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    coreGroup.add(particleSystem);

    // 7. Ambient Floating Points around Core
    const pointGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const pointMat = new THREE.MeshBasicMaterial({ color: 0x22e6ff });
    const orbiters: THREE.Mesh[] = [];

    for (let i = 0; i < 5; i++) {
      const orbiter = new THREE.Mesh(pointGeo, pointMat);
      coreGroup.add(orbiter);
      orbiters.push(orbiter);
    }

    // Mouse Interaction
    let targetX = 0;
    let targetY = 0;
    let windowHalfX = container.clientWidth / 2;
    let windowHalfY = container.clientHeight / 2;

    const onMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX - windowHalfX) * 0.0006;
      targetY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      windowHalfX = container.clientWidth / 2;
      windowHalfY = container.clientHeight / 2;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Continuous organic rotation
        coreMesh.rotation.y += 0.25 * delta;
        coreMesh.rotation.x += 0.15 * delta;

        innerMesh.rotation.y -= 0.35 * delta;
        innerMesh.rotation.z += 0.2 * delta;

        ring1.rotation.z += 0.3 * delta;
        ring2.rotation.z -= 0.2 * delta;

        particleSystem.rotation.y += 0.08 * delta;

        // Animate orbiters along trigonometric paths
        orbiters.forEach((orb, idx) => {
          const speed = 0.8 + idx * 0.3;
          const radius = 6.0 + idx * 0.6;
          orb.position.x = Math.cos(time * speed + idx) * radius;
          orb.position.y = Math.sin(time * speed * 0.7 + idx) * (radius * 0.5);
          orb.position.z = Math.sin(time * speed + idx) * radius;
        });

        // Smooth mouse parallax lerp
        coreGroup.rotation.y += (targetX - coreGroup.rotation.y) * 0.05;
        coreGroup.rotation.x += (targetY - coreGroup.rotation.x) * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      coreGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      pointGeo.dispose();
      pointMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
