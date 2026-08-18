let num = 25;

// Square root
console.log("Square Root:", Math.sqrt(num));

// Power
console.log("Power:", Math.pow(2, 3));



// Round
console.log("Round:", Math.round(4.6));

// Floor
console.log("Floor:", Math.floor(4.9));

//random
console.log("Random Number:", Math.random());

//absolute
console.log("Absolute Value:", Math.abs(-10));


// Trigonometric functions
console.log("Sine:", Math.sin(Math.PI / 2));
console.log("Cosine:", Math.cos(0));
console.log("Tangent:", Math.tan(Math.PI / 4));

// Logarithm
console.log("Natural Logarithm:", Math.log(10));
console.log("Base 10 Logarithm:", Math.log10(100));

// Exponential
console.log("Exponential:", Math.exp(2));

// Min and Max
let numbers = [10, 5, 20, 15];
console.log("Minimum:", Math.min(...numbers));
console.log("Maximum:", Math.max(...numbers));

// Random integer between 1 and 100
let randomInt = Math.floor(Math.random() * 100) + 1;
console.log("Random Integer (1-100):", randomInt);

// Factorial function
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log("Factorial of 5:", factorial(5));

// Prime number check
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
console.log("Is 17 a prime number?", isPrime(17));
console.log("Is 15 a prime number?", isPrime(15));