/*Create a function that will be able to convert figures from Fahrenheit to Celsius.
Formular is C = 5/9(F-32)*/


function fahrenheitToCelsius (x) {
    var celsius = 5 / 9 * (x - 32);
    return celsius;
  }

  //E.g
  let x = 140;
  var celsius = fahrenheitToCelsius (x)
  console.log (celsius); //output is 60



//(2)...Create a function that will calculate the average of numbers in an array.
//average (a)= sumofnumbers/total

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const average = sum / numbers.length;
  return average;
}

//E.g
const numbers = [12, 13, 14, 15, 16];
const average = calculateAverage(numbers);
console.log(average);  // Output: 14


//(3)...Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

//E.g
console.log(isDivisible(18, 2, 6));  // Output: true (18 is divisible by both 2 and 6)
console.log(isDivisible(32, 4, 7));  // Output: false (32 is not divisible by 7)
console.log(isDivisible(14, 7, 14))  // Output: true (14 is divisible by both 7 and 14)

//(4)...Create a function that will output the first 100 prime numbers.

function generatePrimes(count) {
  const primes = [];
  let num = 2;

  while (primes.length < count) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

//E.g
const primes = generatePrimes(100);
console.log(primes);


//(5).... Create a function that will return a boolean specifying if a number is a prime number.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

//E.g
console.log(isPrime(7));     // Output: true (7 is a prime number)
console.log(isPrime(12));    // Output: false (12 is not a prime number)
console.log(isPrime(23));    // Output: true (23 is a prime number)
console.log(isPrime(1));     // Output: false (1 is not a prime number)


//(6)

//(7)...Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//E.g
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16



/*(8)....The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
* It must start with a hash symbol, #.
* Ignore all spaces in the input.
* All words must have their first letter capitalized.*/
