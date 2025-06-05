
import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
}

const LanyardModel: React.FC<LanyardProps> = ({ position = [0, 0, 0], gravity = [0, -40, 0] }) => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the GLB model and texture
  const gltf = useLoader(GLTFLoader, '/src/assets/lanyard/card.glb');
  const texture = useLoader(TextureLoader, '/src/assets/lanyard/lanyard.png');
  
  // Apply physics-like movement
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Simple gravity simulation
      meshRef.current.position.y += gravity[1] * delta * 0.01;
      
      // Add some floating animation
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <primitive object={gltf.scene} scale={[2, 2, 2]} />
    </group>
  );
};

const Lanyard: React.FC<LanyardProps> = ({ position, gravity }) => {
  return (
    <div className="w-full h-96">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Lanyard Model */}
        <LanyardModel position={position} gravity={gravity} />
      </Canvas>
    </div>
  );
};

export default Lanyard;
