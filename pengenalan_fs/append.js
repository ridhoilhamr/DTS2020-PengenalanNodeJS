const fs = require('fs')

fs.appendFile('myText.txt', 'Hello NodeJS', function() {
  console.log('Berhasil menuliskan file.')
})