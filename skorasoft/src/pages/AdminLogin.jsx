import React, { useRef, useState } from "react";
import { adminLogin } from "../hooks/useAdmin";

export default function AdminLogin() {
  const username = useRef();
  const password = useRef();
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    const data = {
      username: username.current.value,
      password: password.current.value,
    };

    const res = await adminLogin(data);

    if (res.success) {
      setMsg("Login Successful!");
      window.location.href = "/admin/dashboard";
    } else {
      setMsg(res.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="bg-gray-800 p-8 rounded w-96 text-white">
        <h2 className="text-3xl mb-4 text-center">Admin Login</h2>

        <input
          ref={username}
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 bg-gray-700 rounded"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>

        {msg && <p className="text-center mt-3 text-red-400">{msg}</p>}
      </div>
    </div>
  );
}
