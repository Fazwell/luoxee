"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-gray-300">{message}</p>}
        <p className="text-center mt-6 text-gray-400">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
