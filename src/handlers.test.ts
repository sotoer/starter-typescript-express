import app from './app';
import supertest from 'supertest';

const request = supertest(app);

describe('Test API', () => {
  it('Gets the /hello/bob endpoint', async (done) => {
    const res = await request.get('/hello/bob');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello bob');
    done();
  });
});
