import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // link to the order
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // optional if guest
  guest: {
    name: { type: String },
    email: { type: String },
    phone: { type: String }
  }, // optional if guest

  amount: { type: Number, required: true },
  currency: { type: String, default: 'MWK' },
  paymentGateway: { type: String, default: 'PayChangu' }, // e.g., PayChangu
  transactionId: { type: String, required: true }, // from gateway
  status: { type: String, enum: ['pending', 'successful', 'failed'], default: 'pending' },
  paymentDate: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false } // set true after verification
});

// Optional: update payment verification automatically or via webhook
paymentSchema.pre('save', async function(next) {
  // you can add verification logic here if needed
  next();
});

export default mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
