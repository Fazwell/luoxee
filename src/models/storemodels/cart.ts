import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
});

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  variant: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, default: 1, min: 1 },
  selectedWarehouse: { type: String }
});

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  guest: guestSchema,
  items: [cartItemSchema],
  totalPrice: { type: Number, default: 0 },
  currency: { type: String, default: 'MWK' },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

cartSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);
