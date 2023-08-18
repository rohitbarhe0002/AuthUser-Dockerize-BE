import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private readonly userService: UserService) {}

  async signUp(req: Request, res: Response) {
    const { username, password } = req.body;
    await this.userService.signUp(username, password);
    res.json({ message: 'User registered successfully' });
  }
}
