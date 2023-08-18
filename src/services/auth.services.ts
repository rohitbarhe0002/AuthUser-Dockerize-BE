import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../model/user.model'

export default class AuthService {
  async login(username: string, password: string): Promise<string> {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');

    if (user.lockUntil && user.lockUntil > Date.now()) {
      throw new Error('User locked');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      await this.handleFailedLogin(user);
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ username },process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return token;
  }

  async handleFailedLogin(user: any): Promise<void> {
    user.loginAttempts += 1;
    if (user.loginAttempts > 3) {
      user.lockUntil = Date.now() + 5 * 60 * 1000; 
      user.loginAttempts = 0;
    }
    await user.save();
  }
}
