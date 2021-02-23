// Jawaban Soal 1
let jari_jari
let diameter
let phi

const luasLingkaran = (jari_jari) => {
  if (jari_jari % 7 == 0) {
    phi = 22 / 7
  } else {
    ;(phi = 3), 14
  }

  return phi * jari_jari * jari_jari
}

const kelilingLingkaran = (diameter) => {
  if (diameter % 7 == 0) {
    phi = 22 / 7
  } else {
    ;(phi = 3), 14
  }

  return phi * diameter
}

console.log(luasLingkaran(7))
console.log(kelilingLingkaran(14))
console.log('------------')

// Jawaban Soal 2
let kalimat = ''
let kata

const tambahKata = (kata) => {
  return (kalimat += `${kata} `)
}

tambahKata('saya')
tambahKata('adalah')
tambahKata('seorang')
tambahKata('frontend')
tambahKata('developer')

console.log(kalimat)
console.log('------------')

// Jawaban Soal 3
const newFunction = (firstName, lastName) => {
  obj = {
    firstName,
    lastName,
    fullName: () => {
      return `${obj.firstName} ${obj.lastName}`
    },
  }
  return obj
}

console.log(newFunction('William', 'Imoh').fullName())
console.log('------------')

// Jawaban Soal 4
const actor = {
  firstName: 'Harry',
  lastName: 'Potter Holt',
  destination: 'Hogwarts React Conf',
  occupation: 'Deve-wizard Avocado',
  spell: 'Vimulus Renderus!!!',
}

const { firstName, lastName, destination, occupation, spell } = actor
console.log(firstName, lastName, destination, occupation, spell)
console.log('------------')

// Jawaban Soal 5
const west = ['Will', 'Chris', 'Sam', 'Holly']
const east = ['Gill', 'Brian', 'Noel', 'Maggie']

let combined = [...west, ...east]

console.log(combined)
console.log('------------')
