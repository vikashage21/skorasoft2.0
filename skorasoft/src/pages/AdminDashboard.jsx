import React, { useEffect, useState } from "react";
import { getMessages } from "../hooks/useAdmin";
import UploadVideo from "../components/UploadVideo";
import {Link} from 'react-router-dom'
export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadData() {
      const res = await getMessages();
      if (res.success) setMessages(res.data);
    }
    loadData();
  }, []);

  return (
    <div className="p-10 text-white min-h-screen bg-[#0b0f19]">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <div>
        <Link to='/post' >
        <button className="bg-blue-800 m-2  rounded p-2 px-5">
          post
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-xl">
        <table className="min-w-full bg-[#111827] border border-gray-700 rounded-xl">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 border-b border-gray-700 text-left">
                #
              </th>
              <th className="px-6 py-4 border-b border-gray-700 text-left">
                Name
              </th>
              <th className="px-6 py-4 border-b border-gray-700 text-left">
                Email
              </th>
              <th className="px-6 py-4 border-b border-gray-700 text-left">
                Message
              </th>
              <th className="px-6 py-4 border-b border-gray-700 text-left">
                Date
              </th>
            </tr>
          </thead>

          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-10 text-gray-400">
                  No messages found
                </td>
              </tr>
            ) : (
              messages.map((msg, index) => (
                <tr key={msg._id} className="hover:bg-gray-700/40 transition">
                  <td className="px-6 py-4 border-b border-gray-700">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-700">
                    {msg.name}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-700 text-blue-400 underline">
                    {msg.email}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-700">
                    {msg.message}
                  </td>

                  <td className="px-6 py-4 border-b border-gray-700 text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
