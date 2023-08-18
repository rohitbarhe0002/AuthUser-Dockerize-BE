import { Request, Response } from 'express';
import AuthService from '../services/auth.services';


export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const token = await this.authService.login(username, password);
    res.json({ token });
  }
}
