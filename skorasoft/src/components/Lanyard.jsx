import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, RigidBody } from '@react-three/rapier';
import { Suspense, useRef } from 'react';
import { useGLTF, Stars } from '@react-three/drei';

export default function LanyardPlaceholder() {
  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Canvas camera={{ position: [0, 1, 10], fov: 30 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Physics gravity={[0, -0.2, 0]}> {/* almost zero gravity for floating */}
            <PhoenixBird />
          </Physics>

          <Stars
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            fade 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Floating GLB Model
function PhoenixBird() {
  const modelRef = useRef();
  const gltf = useGLTF('/models/phoenix_bird.glb'); // your GLB path in public/models

  useFrame(() => {
    if (modelRef.current) {
      // Slow rotation
      modelRef.current.rotation.y += 0.003;
      modelRef.current.rotation.x += 0.001;

      // Subtle floating motion
      modelRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <RigidBody type="dynamic" ref={modelRef}>
      <primitive object={gltf.scene} scale={1.5} />
    </RigidBody>
  );
}
