
// Jawaban Soal 1
var loopPertama = 2;

console.log("LOOPING PERTAMA");
while(loopPertama <= 20){
    console.log(loopPertama + " - I love coding");
    loopPertama = loopPertama + 2;
}

var loopKedua = 20;

console.log("LOOPING KEDUA");
while(loopKedua >= 2){
    console.log(loopKedua + " - I will become a frontend developer");
    loopKedua = loopKedua - 2;
}
console.log("------------");

// Jawaban Soal 2
var index = 1;
for(index; index <= 20; index++){
    if(index %2 == 1 && index %3 != 0){
        console.log(index + " - Santai");
    }else if(index %2 == 0){
        console.log(index + " - Berkualitas");
    }else if(index %3 == 0){
        console.log(index + " - I Love Coding");
    }
}
console.log("------------");

// Jawaban Soal 3
var jml_simbol = 7;
var hasil = '';

for(var a = 1; a <= jml_simbol; a++){
    for(var b = 1; b <= a; b++){
        hasil += '# ';
    }
    console.debug(hasil);
    hasil = '';
}
console.log("------------");

// Jawaban Soal 4
var kalimat  = "saya sangat senang belajar javascript";

var pisahKalimat = kalimat.split(" ");
console.log(pisahKalimat);
console.log("------------");

// Jawaban Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

var jumlahBuah = daftarBuah.length;
var urutanDaftarBuah = daftarBuah.sort();
console.log("Jumlah Buah ada : " + jumlahBuah);
for(var i = 0; i < jumlahBuah; i++ ){
    console.log(urutanDaftarBuah[i]);
}