// Uses the __filename from the fs module to create a stream which is then moved using pipe to print the contents of whatever file name is set to process.argv[1]
// var fs = require('fs')
// fs.createReadStream(__filename).pipe(process.stdout)

// Uses the process global object to direct a custom message to a stdout stream then write custom message
// setTimeout(function() {
//   process.stdout.write("Horray bears!")
// }, 1000)

// Uses the exit method on the process object to terminate the node module
// let count = 0
// setInterval(() => {
//   count++
//   if(count>10){
//     process.exit()
//   }
// })

// executes a binary file that is found on our computer
// note: make sure if you are working on a windows pc that your print contents command match that environment e.g.(cat/type)
 var exec = require('child_process').exec
 exec('cat index.js', function(err, stdout, sderr){
   console.log('we got our catted file', stdout )
 })
