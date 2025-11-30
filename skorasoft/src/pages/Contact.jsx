// ContactPage.jsx
import React, { useRef, Suspense , useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { useGLTF } from "@react-three/drei";
import Hyperspeed from "../components/HyperSpeed";
import { userPost } from "../hooks/usePost";

export default function ContactPage() {

  const name = useRef(null);
  const email = useRef(null);
  const textContent = useRef(null);

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handelForm = async () => {
    const userdata = {
      name: name.current.value,
      email: email.current.value,
      message: textContent.current.value,
    };

    console.log(userdata)

    if (!userdata.name || !userdata.email || !userdata.message) {
      setResponseMsg("All fields are required!");
      return;
    }

    setLoading(true);
    const result = await userPost(userdata);
    console.log(result)
    setLoading(false);

    if (!result?.success) {
      setResponseMsg(result?.message || "Failed to send message!");
      return;
    }

    // ✅ SUCCESS MESSAGE
    setResponseMsg("Message sent successfully!");
  };

  return (
    <div className="w-full h-screen relative bg-black">
      
      {/* Hyperspeed Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* Astronaut Canvas */}
      <Canvas
        camera={{ position: [0, 1, 10], fov: 30 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Physics gravity={[0, -0.2, 0]}>
            <Astronaut />
          </Physics>
        </Suspense>
      </Canvas>

      {/* Contact Form */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/70 p-8 rounded-lg flex flex-col gap-4 w-96 text-white z-10"
        >
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>

          <input
            ref={name}
            type="text"
            placeholder="Your Name"
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />

          <input
            ref={email}
            type="email"
            placeholder="Your Email"
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />

          <textarea
            ref={textContent}
            placeholder="Your Message"
            rows={4}
            className="p-2 rounded bg-gray-800 text-white outline-none"
          />

          <button
            onClick={handelForm}
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded font-semibold"
          >
            Send
          </button>

          {/* SUCCESS / ERROR MESSAGE */}
          {responseMsg && (
            <p className="text-center text-sm mt-2">{responseMsg}</p>
          )}

        </form>
      </div>
    </div>
  );
}

// Floating Astronaut Model
function Astronaut() {
  const modelRef = useRef();
  const gltf = useGLTF(
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb"
  );

  useFrame(() => {
    if (modelRef.current) {
      const time = Date.now() * 0.001;
      modelRef.current.rotation.y += 0.003;
      modelRef.current.rotation.x += 0.001;
      modelRef.current.position.y = Math.sin(time) * 1;
      modelRef.current.position.x = Math.sin(time * 0.5) * 0.5;
      modelRef.current.position.z = Math.cos(time * 0.3) * 0.5;
    }
  });

  return (
    <RigidBody type="dynamic" ref={modelRef}>
      <primitive object={gltf.scene} scale={1.5} />
    </RigidBody>
  );
}
