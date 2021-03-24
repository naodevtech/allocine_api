import { createServer } from '../app/server';
import request from 'supertest';

let server: Express.Application;

beforeAll(async () => {
  server = await createServer();
});

describe('GET /', () => {
  it('should return 200 & valid response if request param list is empity', async (done) => {
    request(server)
      .get(`/`)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: 'Hello world !' });
        done();
      });
  });
});
