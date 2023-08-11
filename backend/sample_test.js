/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /api/data', () => {
  it('it should GET all the data', (done) => {
    chai.request(server)
      .get('/api/data')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
