import coinIDsJson from '../src/coinIDs.json';
import supertest from'supertest';

const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/';

describe('GET all coins (coinmarketcap)', () => {
  Object.entries(coinIDsJson.coinmarketcap).map(([key, value]) => it(`respond with ${key}`, (done) => {
    supertest(BASE_URL)
      .get(`${value}/?convert=PLN`)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json')
      .expect(res => expect(res.body.data.quotes.PLN.price).not.toBeNull())
      .expect(200, done);
  }));
});
