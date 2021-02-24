var readBooksPromise = require('./promise.js')

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
]

// Lanjutkan code untuk menjalankan function readBooksPromise
var initTime = 10000

function execute(initTime, listBook, i = 0) {
  readBooksPromise(initTime, listBook[i])
    .then(function (readBooksPromise) {
      if (readBooksPromise !== 0) {
        if (books.length - 1 !== i) execute(readBooksPromise, listBook, i + 1)
      }
    })
    .catch(function (err) {
      console.log(err)
    })
}

execute(initTime, books)
