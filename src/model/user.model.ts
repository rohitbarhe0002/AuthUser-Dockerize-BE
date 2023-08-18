import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: { type: Number },
});

const User = mongoose.model('User', userSchema);

export default User;
