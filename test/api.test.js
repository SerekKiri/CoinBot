const coinID = require('../src/coinIDs.json');
const request = require('supertest');

const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/';

describe('GET all coins (coinmarketcap)', () => {
  Object.entries(coinID.coinmarketcap).map(([key, value]) => it(`respond with ${key}`, (done) => {
    request(BASE_URL)
      .get(`${value}/?convert=PLN`)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json')
      .expect(res => expect(res.body.data.quotes.PLN.price).not.toBeNull())
      .expect(200, done);
  }));
});
