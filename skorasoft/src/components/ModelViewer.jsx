import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ url, ...props }) => {
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} {...props} />;
};

const ModelViewer = ({ url }) => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1} />

        <Model
          url={url}
          scale={1.2}
          rotation={[0, Math.PI, 0]}
          position={[0, -1, 0]}
        />

        <OrbitControls enableZoom={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
