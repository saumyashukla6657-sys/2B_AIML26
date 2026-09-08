function total(...values) {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    console.log(total);
};
let arr=[10, 20, 30,40, 50];
total(...arr); // Output: 150