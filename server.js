const http = require('http')

const server = http.createServer(function(req, res){
    res.end('Hai Ridho, Selamat belajar di NodeJS')
})                                                          // melakukan create server

server.listen(9090)                                         // memberikan layanan
console.log('server running at port 9090')