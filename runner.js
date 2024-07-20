const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjM5MGNmYWYyLWU3NmQtNGYxYy05OTMyLTMxM2NjNjRkMDJkNy0xNzIxNTAyODc2NTkxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzAxZTI2ODAtYmExYi00Yjc1LTg2NzMtMzllNTgxMGU1OGY0IiwidHlwZSI6InQifQ.D3qwpOTaRN85rsjjfU8KEg1AlUPYMXiVHwOVjlFKUpM'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
