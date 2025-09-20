// lib/mongodb.ts
import mongoose from "mongoose";

declare global {
  var mongoose: any; // To prevent TypeScript issues with global variable
}

let cached: Promise<void> | null = null;

export async function connectDB(): Promise<void> {
  // If already connected, return immediately
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // If there's a pending connection, wait for it
  if (cached) {
    return cached;
  }

  const uri = process.env.MONGODB_URI as string;
  if (!uri) {
    throw new Error("❌ MONGODB_URI is not defined in .env.local");
  }

  // Cache the promise to prevent multiple simultaneous connections
  cached = mongoose.connect(uri, {
    bufferCommands: false,
  }).then(() => {
    console.log("✅ MongoDB connected");
    return;
  }).catch((error) => {
    cached = null; // Reset cache on error
    console.error("❌ MongoDB connection error:", error);
    throw error;
  });

  return cached;
}