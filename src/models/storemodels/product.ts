import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  color: { type: String },
  size: { type: String },
  price: { type: Number, required: true }, 
  warehouseStock: [
    { warehouse: { type: String, required: true }, quantity: { type: Number, default: 0 } }
  ],
  images: [{ type: String }],
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  basePrice: { type: Number, required: true }, // MWK default
  currency: { type: String, default: 'MWK' },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  targetGender: { type: String, enum: ['male', 'female', 'unisex'], default: 'unisex' },
  variants: [variantSchema],
  measurements: {
    weight: { type: Number },
    height: { type: Number },
    width: { type: Number },
    depth: { type: Number },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

productSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
