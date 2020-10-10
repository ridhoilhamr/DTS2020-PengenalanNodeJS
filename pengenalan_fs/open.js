const fs = require('fs')

fs.open('myText2.txt', 'w', (err, file) => { //w digunakan untuk menulis
  if(err) {
    return console.error(err)
  }

  console.log('Saved!')
})