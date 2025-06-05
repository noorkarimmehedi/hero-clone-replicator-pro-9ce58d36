
/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';

import * as THREE from 'three';
import './Lanyard.css';

export default function Lanyard({ position = [0, 0, 30] as [number, number, number], gravity = [0, -40, 0] as [number, number, number], fov = 20, transparent = true }) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0 }) {
  const band = useRef<any>(), fixed = useRef<any>(), j1 = useRef<any>(), j2 = useRef<any>(), j3 = useRef<any>(), card = useRef<any>();
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3();
  const segmentProps = { 
    type: 'dynamic' as const, 
    canSleep: true, 
    colliders: false as const, 
    angularDamping: 4, 
    linearDamping: 4 
  };
  
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]));
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);
  const [tubeGeometry, setTubeGeometry] = useState<THREE.TubeGeometry | null>(null);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.50, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useEffect(() => {
    // Initialize the tube geometry
    const initialGeometry = new THREE.TubeGeometry(curve, 32, 0.02, 8, false);
    setTubeGeometry(initialGeometry);
    
    return () => {
      initialGeometry.dispose();
    };
  }, []);

  useFrame((state, delta) => {
    if (dragged && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      [j1, j2].forEach((ref) => {
        if (ref.current) {
          if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
          const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
          ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
        }
      });
      
      // Update curve points
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      
      // Create new tube geometry from updated curve
      if (tubeGeometry && band.current) {
        const newGeometry = new THREE.TubeGeometry(curve, 32, 0.02, 8, false);
        if (band.current.geometry) {
          band.current.geometry.dispose();
        }
        band.current.geometry = newGeometry;
        tubeGeometry.dispose();
        setTubeGeometry(newGeometry);
      }
      
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" canSleep={true} angularDamping={4} linearDamping={4} />
        <RigidBody position={[0.5, 0, 0]} ref={j1} type="dynamic" canSleep={true} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} type="dynamic" canSleep={true} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} type="dynamic" canSleep={true} angularDamping={4} linearDamping={4}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} type={dragged ? 'kinematicPosition' : 'dynamic'} canSleep={true} angularDamping={4} linearDamping={4}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => {
              e.target.setPointerCapture(e.pointerId);
              if (card.current) {
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
              }
            }}>
            {/* Simple card geometry instead of GLB */}
            <mesh>
              <boxGeometry args={[1.6, 2.25, 0.02]} />
              <meshPhysicalMaterial 
                color="#ffffff" 
                clearcoat={1} 
                clearcoatRoughness={0.15} 
                roughness={0.9} 
                metalness={0.8} 
              />
            </mesh>
            {/* Simple clip geometry */}
            <mesh position={[0, 1.8, 0.02]}>
              <boxGeometry args={[0.3, 0.2, 0.05]} />
              <meshPhysicalMaterial color="#888888" roughness={0.3} metalness={0.8} />
            </mesh>
          </group>
        </RigidBody>
      </group>
      {tubeGeometry && (
        <mesh ref={band} geometry={tubeGeometry}>
          <meshStandardMaterial color="#666666" />
        </mesh>
      )}
    </>
  );
}
