const http = require('http')

const server = http.createServer(function(req, res){ 
    res.writeHead(200, {'Content-Type': 'text/html'})     
    //wrieHead -> memberikan manipulasi  
    //Content-Type -> berfungsi menunujan kepada kline menunjukan tipe respon dan text/html -> merupakan respon HTML
    res.write('Hai Ridho, Selamat belajar di <b>NodeJS</b>')
    res.end()
})                                                         

server.listen(9090)                                        
console.log('server running at port 9090')
