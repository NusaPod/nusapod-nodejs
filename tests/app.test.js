import request from 'supertest';
import app from '../src/app.js';

describe('App routes', () => {
  it('GET / should return hello world', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Hello, world!');
  });

  it('GET /add/:a/:b should return correct sum', async () => {
    const res = await request(app).get('/add/2/3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });
});
