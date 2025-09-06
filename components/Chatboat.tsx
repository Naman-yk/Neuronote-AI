"use client";

import { useState } from "react";

export default function Chatbot({ context }: { context: string }) {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input, context }),
    });

    const data = await res.json();
    const botMsg = { role: "bot", text: data.reply || "Error fetching reply" };
    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="border rounded-xl p-4 w-full max-w-lg mx-auto">
      <div className="h-64 overflow-y-auto border-b mb-2 p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === "user" ? "text-blue-600" : "text-green-600"}>
            <strong>{msg.role === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Ask something..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
