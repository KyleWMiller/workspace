var fs = require('fs')

var columns = [],
  objects = [],
  output = []
  input = fs.readFileSync(process.argv[2], {
    encoding: 'utf8'
  })
  .replace(/\r/g, '')
  .split('\n')
  .map(x => {
    var holding = []
    holding = x.split(',')
    if (holding.length > 1) {
      columns.push(holding)
      holding = []
    }
  })

columns.map(x => {
  var holdingObj = {}
  holdingObj.date = x[0]
  holdingObj.time = x[1]
  holdingObj.something = x[2]
  holdingObj.cg = x[3]
  objects.push(holdingObj)
  holdingObj = {}
})

output = JSON.stringify(testDataObjs)

fs.writeFileSync('./testOpJSON.js', output)
console.log('completed')
