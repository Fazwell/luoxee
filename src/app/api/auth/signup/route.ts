// app/api/auth/signup/route.ts (App Router)
import { NextRequest, NextResponse } from 'next/server';
//import bcrypt from 'bcryptjs';
import User from '@/models/authentication/customer';
import { connectDB } from '@/lib/luoxeedb';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const { name, email, password, phone } = await request.json();

    // Validation
    if (!name || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      );
    }

    // Create user (password will be hashed by pre-save middleware)
    const user = await User.create({
      name,
      email,
      password, // Will be hashed automatically
      phone,
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user.toObject();

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword,
    });

  } catch (error: any) {
    console.error('Signup error:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}