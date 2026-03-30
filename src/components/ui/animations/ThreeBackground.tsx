"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export interface ThreeBackgroundProps {
  particleCount?: number;
  particleColor?: string | number;
  particleOpacity?: number;
  particleSize?: number;
  className?: string;
}

export function ThreeBackground({
  particleCount = 5000,
  particleColor = 0x2563eb,
  particleOpacity = 0.2,
  particleSize = 2,
  className = "",
}: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    currentMount.appendChild(renderer.domElement);

    // Create particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      vertices.push(x, y, z);
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const color = typeof particleColor === 'string' 
      ? parseInt(particleColor.replace('#', ''), 16) 
      : particleColor;
      
    const material = new THREE.PointsMaterial({ 
      color, 
      size: particleSize, 
      transparent: true, 
      opacity: particleOpacity 
    });
    
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 1000;

    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2);
    };

    document.addEventListener("mousemove", onDocumentMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.x += 0.0005;
      points.rotation.y += 0.001;
      camera.position.x += (mouseX - camera.position.x) * .05;
      camera.position.y += (-mouseY - camera.position.y) * .05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", onDocumentMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount) currentMount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [particleCount, particleColor, particleOpacity, particleSize]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 z-0 opacity-10 pointer-events-none ${className}`} 
    />
  );
}