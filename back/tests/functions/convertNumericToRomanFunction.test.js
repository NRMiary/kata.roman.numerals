const request = require('supertest');
const app = require('../../server.js'); // Mettez à jour le chemin vers votre fichier app

describe('API Endpoints', () => {
    describe('/api/convert-arabic', () => {
        it('should convert a valid Arabic number to a Roman numeral', async () => {
            const res = await request(app).get('/api/convert-arabic?arabic=10');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 'X');
        });
    });
});
