import AuthService from '../../services/auth.services';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  it('should throw an error for invalid credentials', async () => {
    await expect(authService.login('testuser', 'wrongpassword')).rejects.toThrow('Invalid credentials');
  });

});
