
// Jawaban Soal 1
function halo(){
    return "Halo Sanbers!";
}

console.log(halo());
console.log("------------");

// Jawaban Soal 2
var num1 = 12;
var num2 = 4;

function kalikan(angka1, angka2){
    return angka1*angka2;
}

var hasilKali = kalikan(num1, num2);
console.log("Hasil kali diatas adalah = " + hasilKali);
console.log("------------");

// Jawaban Soal 3
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

function introduce(name, age, address, hobby){
    return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya punya hobby yaitu " + hobby + "!";
}

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di Jalan belum jadi, dan saya punya hobby yaitu Gaming!"
console.log("------------");

// Jawaban Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];

var objectDataPeserta = {
    name: "Asep",
    gender: "laki-laki",
    hobby: "baca buku",
    year_birth: 1992
};

console.log(objectDataPeserta);
console.log("------------");

// Jawaban Soal 5
var buahBuahan = [
    {
        nama: "strawberry",
        warna: "merah",
        ada_bijinya: false,
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        ada_bijinya: true,
        harga: 8000
    },
    {
        nama: "semangka",
        warna: "hijau & merah",
        ada_bijinya: true,
        harga: 10000
    },
    {
        nama: "pisang",
        warna: "kuning",
        ada_bijinya: false,
        harga: 5000
    }
];

var buahPertama = buahBuahan[0];
console.log(buahPertama);
console.log("------------");

// Jawaban Soal 6
var dataFilm = [];
function tambahFilm(nama, durasi, genre, tahun){
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });

    return dataFilm;
}

tambahFilm("LOTR", "2 jam", "action", 1999);
tambahFilm("Avenger", "2 jam", "action", 2019);
tambahFilm("Spiderman", "2 jam", "action", 2004);
tambahFilm("Juon", "2 jam", "horror", 2004);

console.log(dataFilm);
console.log("------------");