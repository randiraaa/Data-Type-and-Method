# Challenge Data Type
This Data Type Challenge is to practice calculating data types and methods in JavaScript.

## Question
01-random-integer:  
Buatlah sebuah function untuk generate random integer dari 2 buah input integer yaitu nilai minimum min dan maksimum max. Nilai random harus berada pada range tersebut.
* Jika nilai min dan max adalah null, maka function mengembalikan hasil 0.
* Jika nilai max adalah null, jadikan nilai min menjadi 0 dan max mengambil nilai dari min.
```
function rand (min, max) {
  if (min === null || max === null) {
    return 0; 
  } else if (max === undefined) {
    max = min;
    min = 1
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1)); //Output 8
console.log(rand(1, 10)); //Output 3
console.log(rand(6)); //Output 1
console.log(rand()); //Output 0
```

02-choose-your-decimal:  
Buatlah sebuah function yang menerima 2 input berupa:  
* n yang menerima tipe data number. n adalah nilai desimal yang akan ditentukan batas desimalnya.  
* d yang menerima tipe data number. d adalah besaran nilai berapa banyak angka dibelakang desimal dari n.
```
function chooseDecimals(n, d) {
  if (typeof n === 'number') {
    n = n.toFixed(d);
  } else if (typeof n === 'string') {
    n = parseFloat(n).toFixed(d);
  }
  return n;
}

console.log(chooseDecimals(2.100212, 2)); //Output 2.10
console.log(chooseDecimals(2.100212, 3)); //Output 2.100
console.log(chooseDecimals(2100, 2)); //Output 2100.00
```

03-is-it-numeric:
Buatlah sebuah function yang menerima 1 input untuk mengecek apakah inputan tersebut sebuah numerik atau bukan. Jika iya maka akan mengembalikan status TRUE dan jika bukan maka akan mengembalikan status FALSE.
```
function isItNumeric(input) {
  if (typeof input === 'number') {
    return true;
  } else if (typeof input === 'string') {
    return !isNaN(input) && !isNaN(parseFloat(input));
  } else {
    return false;
  }
}

console.log(isItNumeric(12)); //Output true
console.log(isItNumeric('abcd')); //Output false
console.log(isItNumeric('12')); //Output true
console.log(isItNumeric(' ')); //Output false
console.log(isItNumeric(1.20)); //Output true
console.log(isItNumeric(-200)); //Output true
```

04-make-integer-round-up;  
Buatlah sebuah function yang menerima 1 input dengan tipe data integer yang akan dibulatkan ke atas dalam kelipatan 5.
```
function roundUpToFive(num) {
  return Math.ceil(num/5) * 5;
}

console.log(roundUpToFive(32)); //Output 35
console.log(roundUpToFive(137)); //Output 140
console.log(roundUpToFive(142)); //Output 145
```

## Contribution
* Tim Skilvul Tech4impact [Skilvul](https://skilvul.com/)
* Arief Faltah - Instructor Web Development Skilvul Tech4impact