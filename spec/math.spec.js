const request = require('supertest')
const app = require('../src/app')
const jasmineReporters = require('jasmine-reporters')
const httpStatus = require('http-status')

// Configuration to display test result in terminal
jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
  verbosity: 3,
  color: true,
  showStack: true
}))

describe('Math', () => {
    describe('Addition', () => {
        it('should return 400 if num1 or num2 is not number', (done) => {
            request(app)
              .post('/math/add')
              .send({ num1: 1, num2: 'not number' })
              .expect(httpStatus.BAD_REQUEST)
              .end((error) => (error) ? done.fail(error) : done())
          })
    })

})
