const http = require('http')

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.write(JSON.stringify(({success: true})))
    res.end()
})                                                         

server.listen(9090)                                       
console.log('server running at port 9090')