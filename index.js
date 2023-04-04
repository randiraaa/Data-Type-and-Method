// 01-random-integer
// Buatlah sebuah function untuk generate random integer dari 2 buah input integer yaitu nilai minimum min dan maksimum max. Nilai random harus berada pada range tersebut.
// Jika nilai min dan max adalah null, maka function mengembalikan hasil 0
// Jika nilai max adalah null, jadikan nilai min menjadi 0 dan max mengambil nilai dari min

function rand (min, max) {
  if (min === null || max === null) {
    return 0; 
  } else if (max === undefined) {
    max = min;
    min = 1
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1));
console.log(rand(1, 10));
console.log(rand(6));
console.log(rand());

console.log('----------------------------')

// 02-choose-your-decimal
// Buatlah sebuah function yang menerima 2 input berupa:
// n yang menerima tipe data number. n adalah nilai desimal yang akan ditentukan batas desimalnya.
// d yang menerima tipe data number. d adalah besaran nilai berapa banyak angka dibelakang desimal dari n.

function chooseDecimals(n, d) {
  if (typeof n === 'number') {
    n = n.toFixed(d);
  } else if (typeof n === 'string') {
    n = parseFloat(n).toFixed(d);
  }
  return n;
}

console.log(chooseDecimals(2.100212, 2));
console.log(chooseDecimals(2.100212, 3));
console.log(chooseDecimals(2100, 2));

console.log('----------------------------')
