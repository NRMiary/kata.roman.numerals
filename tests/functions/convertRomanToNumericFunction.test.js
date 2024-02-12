const request = require('supertest');
const app = require('../../server.js'); // Mettez à jour le chemin vers votre fichier app

describe('API Endpoints', () => {
    describe('/api/convert-roman', () => {
        it('should convert a valid Roman numeral to a number', async () => {
            const res = await request(app).get('/api/convert-roman?roman=X');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toHaveProperty('result', 10);
        });
    });
});
