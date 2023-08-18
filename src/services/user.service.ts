import bcrypt from 'bcrypt';
import User from '../model/user.model';

export default class UserService {
  async signUp(username: string, password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
  }
}
