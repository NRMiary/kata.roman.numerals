const request = require('supertest');
const app = require('../../server.js'); 

describe('CORS Middleware', () => {
    it('Autoriser les demandes provenant de l/origine spécifiée', async () => {
        const res = await request(app)
            .get('/api/convert-roman?roman=CMLIV')
            .set('Origin', 'https://roman-numerals-conversion.netlify.app');
        expect(res.headers['access-control-allow-origin']).toBe('https://roman-numerals-conversion.netlify.app');
    });

    it('Ne devrait pas autoriser les demandes provenant d/une origine non autorisée', async () => {
        const res = await request(app)
            .get('/api/convert-roman?roman=CMLIV')
            .set('Origin', 'https://unauthorized-origin.com');
        expect(res.headers['access-control-allow-origin']).not.toBe('https://unauthorized-origin.com');
    });
});
