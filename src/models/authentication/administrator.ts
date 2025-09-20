import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String }, // admin phone number
  profilePicture: { type: String }, // URL for profile picture
  role: { type: String, default: 'admin' }, // role name
  permissions: { 
    type: [String], 
    default: ['manage-products', 'manage-orders', 'manage-users'] 
  },

  // Optional OTP fields for admin verification (if needed)
  otp: { type: String },
  otpExpiresAt: { type: Date },
  isVerified: { type: Boolean, default: true }, // can be true by default

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Auto-update updatedAt timestamp
adminSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Admin || mongoose.model('Admin', adminSchema);
