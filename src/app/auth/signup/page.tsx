"use client";

import { useState } from "react";
import { useUserStore } from "@/app/store/user/userStore";
import { User } from "@/app/store/user/userStore";

export default function SignupPage() {
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    phone: "" 
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear message when user starts typing
    if (message) setMessage(null);
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.phone.trim()) return "Phone is required";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Email is invalid";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const validationError = validateForm();
    if (validationError) {
      setMessage({ type: 'error', text: validationError });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: 'success', text: data.message });
        if (data.user) {
          setUser(data.user as User);
        }
        // Reset form on success
        setForm({ name: "", email: "", password: "", phone: "" });
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="w-full max-w-md bg-neutral-900 border border-neutral-800 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="name" 
            placeholder="Full Name" 
            value={form.name}
            onChange={handleChange}
            disabled={loading}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50" 
            required 
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email Address" 
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50" 
            required 
          />
          <input 
            name="phone" 
            placeholder="Phone Number" 
            value={form.phone}
            onChange={handleChange}
            disabled={loading}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50" 
            required 
          />
          <input 
            name="password" 
            type="password" 
            placeholder="Password (min 6 characters)" 
            value={form.password}
            onChange={handleChange}
            disabled={loading}
            className="w-full p-3 rounded bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50" 
            required 
          />
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 rounded-lg font-semibold transition disabled:cursor-not-allowed"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
        
        {message && (
          <div className={`mt-4 text-center text-sm p-3 rounded ${
            message.type === 'success' 
              ? 'bg-green-900/50 text-green-300 border border-green-600/50' 
              : 'bg-red-900/50 text-red-300 border border-red-600/50'
          }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}