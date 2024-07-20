const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImYyMjJiOGNiLWIyNGItNGEwNi05NWYyLWNmZjQ3MzU1MmM3OSIsImV4cCI6NDEwMjQ0NDgwMDAwMCwidmVyIjoiMCIsInNlcyI6IjMwODAwOTJhLTVjNjYtNGJiNC04ZmM4LWQ0OTUzMjY4OWI0ZiIsInR5cGUiOiJhcCJ9.7DWjPquKwGdhwmshxc55W0X3rAR92E6PhcdNj0xeNxQ'

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
