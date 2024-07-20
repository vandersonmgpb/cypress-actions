const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImYyMjJiOGNiLWIyNGItNGEwNi05NWYyLWNmZjQ3MzU1MmM3OS0xNzIxNDY4NTM3MDg1IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOGFjOWY4YWYtMjMyMi00NTVjLWE4YzktYTNjMDQ1MzYzNzBmIiwidHlwZSI6InQifQ.IM7RghimVeeJhPQ0fkiZujCGiGFO9lNpKNdC8A-boNU'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
