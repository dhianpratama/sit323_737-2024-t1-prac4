const request = require('supertest')
const app = require('../src/app')
const httpStatus = require('http-status')

describe('Math', () => {
  describe('Addition', () => {
    it('should return 400 if num1 or num2 is not number', (done) => {
      request(app)
        .post('/math/add')
        .send({ num1: 1, num2: 'not number' })
        .expect(httpStatus.BAD_REQUEST)
        .end((error) => (error) ? done.fail(error) : done())
    })

    it('should return 200 and result successfully if num1 or num2 are number', (done) => {
      request(app)
        .post('/math/add')
        .send({ num1: 1, num2: 2 })
        .expect({ result: 3 })
        .expect(httpStatus.OK)
        .end((error) => (error) ? done.fail(error) : done())
    })
  })
})
