const express = require('express')

const app = express()

app.set('view engine', 'ejs') //rendering/embed ejs

app.get('/about',  function(req, res, next) {     //get berfungsi melayani permintaan dari user
  console.log(req.query)
  res.send({ success: true, keyword: req.query.keyword })
})

app.get('/txt-response',  function(req, res, next) {    
  res.send("Hallo NodeJS!")
})

app.get('/product/:productId', function(req, res, next) {
  res.send({ success: true, productId: req.params.productId })
})

app.get('/category/:productCategory/product/:productId', (req, res, next) => { //mengisi value pada postman
  res.send(req.params)
})

// app.get('/error', (req, res, next) => { 
//     next(new Error('contoh error'))
// })
// // next berfungsi melempar handler berikutnya 
// app.use((err, req, res, next) => {
//     console.error(err)
//     res.send('terjadi error')
// })

app.get('/error', (req, res, next) => {
  next(new Error('contoh error'))
})

app.get('/multi-handler', function(req, res, next) {
                                                    //validasi request
  if (req.query.keyword === 'satu') {
    return next()
  }

  return res.send('Keyword harus satu')
}, function(req, res, next) {
                                                     //handle request
  res.send('Sukses')
})

app.get('/index', (req, res, next) => {
  // console.log(__dirname)
  res.sendFile(__dirname + '/index.html')
})

app.get('/pdf', (req, res, next) => {
  res.download(__dirname + '/tugasNodeJS.pdf', 'TugasNodeJS.pdf')
})

app.get('/pelatihan', function(req, res, next) {
  res.render('index', { subBab: req.query.subBab })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.send('terjadi error')
})

app.listen(9090, function(){
  console.log('App listen on port 9090')
})