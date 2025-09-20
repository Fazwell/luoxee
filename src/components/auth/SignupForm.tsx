"use client";

import { useState } from "react";

export default function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Signup failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white shadow rounded-lg p-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Create Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border px-3 py-2 rounded-md"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border px-3 py-2 rounded-md"
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  );
}
