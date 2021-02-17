
// Jawaban Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var gabunganKata = kataPertama + " " 
+ kataKedua.replace(/^./, kataKedua[0].toUpperCase()) + " "
+ kataKetiga + " " 
+ kataKeempat.toUpperCase();

console.log(gabunganKata);
console.log("------------");

// Jawaban Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var KataPertamaInteger = parseInt(kataPertama);
var KataKeduaInteger = parseInt(kataKedua);
var kataKetigaInteger = parseInt(kataKetiga);
var kataKeempatInteger = parseInt(kataKeempat);

var jumlahInteger = KataPertamaInteger+KataKeduaInteger+kataKetigaInteger+kataKeempatInteger;
console.log("Jumlah Integer Variable diatas adalah : " + jumlahInteger);
console.log("------------");

// Jawaban Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.match(/itu/); // atau dengan match("itu");
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substring(24, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log("------------");

// Jawaban Soal 4
var nilai = 75;

// function cekNilai(nilai){
//     var index;
//     if(nilai >= 80){
//         index = 'Nilai Index anda adalah A';
//     }else if(nilai >= 70 && nilai < 80){
//         index = 'Nilai Index anda adalah B';
//     }else if(nilai >= 60 && nilai < 70){
//         index = 'Nilai Index anda adalah C';
//     }else if(nilai >= 50 && nilai < 60){
//         index = 'Nilai Index anda adalah D';
//     }else if(nilai < 50){
//         index = 'Nilai Index anda adalah E';
//     }
    
//     return index;
// }

var index;
if(nilai >= 80){
    index = 'Nilai Index anda adalah A';
}else if(nilai >= 70 && nilai < 80){
    index = 'Nilai Index anda adalah B';
}else if(nilai >= 60 && nilai < 70){
    index = 'Nilai Index anda adalah C';
}else if(nilai >= 50 && nilai < 60){
    index = 'Nilai Index anda adalah D';
}else if(nilai < 50){
    index = 'Nilai Index anda adalah E';
}

console.log(index);
console.log("------------");

// Jawaban Soal 5
var tanggal = 1;
var bulan = 7;
var tahun = 1999;

var namaBulan = '';

switch(bulan){
    case 1: 
    {
        namaBulan = 'Januari';
        break;
    }
    case 2: 
    {
        namaBulan = 'Februari';
        break;
    }
    case 3: 
    {
        namaBulan = 'Maret';
        break;
    }
    case 4: 
    {
        namaBulan = 'April';
        break;
    }
    case 5: 
    {
        namaBulan = 'Mei';
        break;
    }
    case 6: 
    {
        namaBulan = 'Juni';
        break;
    }
    case 7: 
    {
        namaBulan = 'Juli';
        break;
    }
    case 8: 
    {
        namaBulan = 'Agustus';
        break;
    }
    case 9: 
    {
        namaBulan = 'September';
        break;
    }
    case 10: 
    {
        namaBulan = 'Oktober';
        break;
    }
    case 11: 
    {
        namaBulan = 'November';
        break;
    }
    case 12: 
    {
        namaBulan = 'Desember';
        break;
    }
        default:
    {
        namaBulan = 'Tidak ada';
        break;
    }
}

var tanggalLahir = tanggal + " " + namaBulan + " " + tahun;

console.log(tanggalLahir);