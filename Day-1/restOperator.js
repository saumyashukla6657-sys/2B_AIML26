/*nction sum(name, ...args) {
    let total = 0;  
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}   
sum("Alice", 1, 2, 3, 4, 5); // Output: 15
sum("Bob", 10, 20, 30); // Output: 60
console.log(sum("Charlie", 1, 2, 3, 4, 5,100)); // Output: 115*/

function sum(firstName, lastName, ...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    console.log("name", firstName, lastName, "total", total);
}

sum("Alice", "Smith", 1, 2, 3, 4, 5);
    

