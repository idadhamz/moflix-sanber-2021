// di index.js
var readBooks = require('./callback.js')

var books = [
  { name: 'LOTR', timeSpent: 3000 },
  { name: 'Fidas', timeSpent: 2000 },
  { name: 'Kalkulus', timeSpent: 4000 },
  { name: 'komik', timeSpent: 1000 },
]

// Tulis code untuk memanggil function readBooks di sini

var initTime = 10000

function execute(initTime, listBook, i = 0) {
  readBooks(initTime, listBook[i], function (readBooks) {
    if (readBooks !== 0) {
      if (books.length - 1 !== i) execute(readBooks, listBook, i + 1)
    }
  })
}

execute(initTime, books)

// books.forEach((book, index) => execute(timeSpentAll, index))

// for (var i = 0; i < books.length; i++) {
//   execute(timeSpentAll, i)
// }
