// Jawaban Soal 1
console.log('----SOAL 1----')

console.log('----RELEASE 0----')

class Animal {
  constructor(name, legs) {
    this._name = name
    this._legs = legs
    this._cold_blooded = false
  }

  get name() {
    return this._name
  }

  set name(value) {
    this._name = value
  }

  get legs() {
    return this._legs
  }

  set legs(value) {
    this._legs = value
  }
}

var sheep = new Animal('shaun')
sheep.legs = 4

console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep._cold_blooded)

console.log('----RELEASE 1----')

class Ape extends Animal {
  constructor(name, legs) {
    super(name)
    this._legs = legs
  }

  yell = () => {
    console.log(`Auooo`)
  }
}

var sungokong = new Ape('kera sakti')
sungokong._legs = 2

sungokong.yell()
console.log(sungokong.name)
console.log(sungokong._legs)

class Frog extends Animal {
  constructor(name, legs) {
    super(name, legs)
  }

  jump = () => {
    console.log(`hop hop`)
  }
}

var kodok = new Frog('buduk')
kodok.legs = 4

kodok.jump()
console.log(kodok.name)
console.log(kodok.legs)

// Jawaban Soal 2
console.log('----SOAL 2----')

class Clock {
  constructor({ template }) {
    this._template = template
    this.render = this.render.bind(this)
  }

  render() {
    var date = new Date()

    var hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    var mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    var secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    var output = this._template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    // this.timer = setInterval(() => this.render(), 1000)
    // this.timer = setInterval(this.render.bind(this), 1000)
    this.timer = setInterval(this.render, 1000)
  }
}

var clock = new Clock({ template: 'h:m:s' })
clock.start()
