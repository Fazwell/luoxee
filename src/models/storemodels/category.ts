import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "T-Shirts", "Furniture"
  description: { type: String }, // optional details about the category
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, // optional for subcategories
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Auto-update `updatedAt` timestamp
categorySchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
