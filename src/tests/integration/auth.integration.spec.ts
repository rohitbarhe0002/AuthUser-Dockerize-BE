import request from 'supertest';
import app from '../../app.module'; 

describe('Auth API', () => {
  it('should return a JWT token on successful login', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ username: 'testuser', password: 'testpassword' })
      .expect(200);

    expect(response.body.token).toBeDefined();
  });

});
