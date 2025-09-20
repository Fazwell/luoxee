import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  isVerified: boolean;
  otp?: string;
  otpExpiresAt?: Date;
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: "customer" },
  isVerified: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiresAt: { type: Date },
  profilePicture: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

userSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

// ✅ Check if model already exists before creating
const User: Model<IUser> = mongoose.models.Customer || mongoose.model<IUser>("Customer", userSchema);

export default User;
