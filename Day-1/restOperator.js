function sum(...args) {
    let total = 0;  
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}   
sum(1, 2, 3, 4, 5); // Output: 15
sum(10, 20, 30); // Output: 60
console.log(sum(1, 2, 3, 4, 5));