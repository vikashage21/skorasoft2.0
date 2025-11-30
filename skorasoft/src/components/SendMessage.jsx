import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    // show user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    try {
      const res = await axios.post("http://localhost:3000/api/chat", {
        message: input,
      });

      const reply = res.data.reply;

      console.log(reply)

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server connection failed" },
      ]);
    }

    setInput("");
  };

  return (
    <div style={{ width: "400px", margin: "auto", marginTop: "40px" }}>
      <h2 style={{ textAlign: "center" }}>Fitness Project Chatbot</h2>

      <div
        style={{
          height: "300px",
          border: "1px solid gray",
          padding: "10px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <p
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: 4,
            }}
          >
            <b>{msg.sender}:</b> {msg.text}
          </p>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={input}
          placeholder="Type message..."
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={sendMessage} style={{ padding: "10px" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
