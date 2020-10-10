const http = require('http')
const moment = require('moment')

const server = http.createServer((req, res) => {
  const currentDate = moment().format('llll')
  res.end(currentDate)
})

server.listen(9090)
console.log('server listen on port 9090')