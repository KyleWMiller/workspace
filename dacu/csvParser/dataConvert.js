var fs = require('fs')

var columns = [],
  objects = [],
  output = [],
  input = fs.readFileSync(process.argv[2], {
    encoding: 'utf8'
  })
  .replace(/\r/g, '')
  .split('\n')
  .map(x => {
    var holding = []
    holding = x.split(',')
    columns.push(holding)
    holding = []
  })
console.log(columns)
columns.map(x => {
  
})
