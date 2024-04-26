// fungsi ada 2 keadaan
// 1. sebbelum dipanggil => berbentuk fungsi
// 2. setelah dipanggil => berbentuk sesuai dengan return

// penulisan
// function namaFungsi(input){proses; return output}

// 1. penulisan deklaratif
// tipeVar namaFungsi = function(input){proses; return output}
// 2. penulisan ekspresif
// function namaFungsi(input){proses; return output}
// 3. penulisan anak panah
// tiprVar namaFungsi = (input) => {proses; return output}

// deklaratif
function addition(bil1, bil2) {
    // const result = bil1 + bil2; // proses
    // return result //output
    return bil1 + bil2;
}

console.log(addition); // sebelum dipanggil
console.log(addition(1, 2)); // setelah dipanggil


// arrow function
// spesial arrow function
// implicit return => menghilangkan return

const addExplicit = (b1, b2) => {
    return b1 + b2;
}

const addImplicit = (b1, b2 ) => b1 + b2;

console.log(addExplicit(1, 2), addImplicit(1, 2));


// beda bentuk deklarasi/ekspresif dengan bentuk anak panah
// referensi dari this
this.value = "a";

// pada deklaratif/ekspresif, this mengacu pada fungsi/variabel yg menjalankan
function printThisA() {
    this.value = "b";
    return this.value;
}

// pada arrow function, this mengacu pada pembungkus fungsi yg menjalankan
const printThisB = () => {
    return this.value;
}

console.log(printThisA(), printThisB());


// variadic function
// fungsi dengan jumlah imput tidak menentu
function totalHarga(diskon, ...harga) {
    let total = 0;
    // for...of untuk mengambil value
    // for...in untuk mengambil indeks
    for (let hrg of harga) {
        total += hrg;
    }
    return total - diskon;
}

const input = [1000, 2000, 3000];

// console.log(totalHarga(500, ...input));
// console.log(totalHarga(1000, 3000));
// console.log(totalHarga(1000, 2000, 3000, 10000));


// Memanfaatkan return dalam penulisan if di dalam fungsi
// solusi agar if lebih optimal dengan mengurangi penulisan else
// sifat return => kode berhenti saat bertemu return

const valid = (input, datatype) => {
    if (typeof input !== datatype) return true;
    return false;
}

const average = (...scores) => {
    let total = 0;
    for (let score of scores) {
        if (typeof score !== "number") return "Nilai harus berupa number";
        total += score;
    }
    const avg = total / scores.length;
    return Math.round(avg);
}

console.log(average(70, 80, 76));