"use client";

import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        // TODO: save token to cookies/localStorage or redirect
      }
    } catch (err) {
      console.error(err);
      alert("Login failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white shadow rounded-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border px-3 py-2 rounded-md"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full border px-3 py-2 rounded-md"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white rounded-md py-2 hover:bg-gray-800 transition"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
