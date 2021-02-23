
// Jawaban Soal 1
console.log("----SOAL 1----");

console.log("----RELEASE 0----");

class Animal {
    constructor(name, legs = 4, cold_blooded = false){
        this._name = name;
        this._legs = legs;
        this._cold_blooded = cold_blooded;
    }

    get name() {
        return this._name;
    }

    set name(x) {
        this._name = x;
    }

}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep._legs);
console.log(sheep._cold_blooded);

console.log("----RELEASE 1----");

class Ape extends Animal {
    constructor(name, legs = 2){
        super();
        this._name = name;
        this._legs = legs;
    }

    yell = () => {
        console.log(`Auooo dan mempunyai kaki ${this._legs}`);
    }
}

class Frog extends Animal {
    constructor(legs, name){
        super(legs);
        this._name = name;
    }

    jump = () => {
        console.log(`hop hop dengan jumlah kaki ${this._legs}`);
    }
}

var sungokong = new Ape("kera sakti");
sungokong.yell();

var kodok = new Frog("buduk");
kodok.jump();

// Jawaban Soal 2
console.log("----SOAL 2----");

class Clock {
    constructor({ template }) {
      this._template = template;
    }
  
    render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();