function total(...values) {

    let total = 0;

    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }

    console.log(total);
}

let arr = prompt("Enter numbers separated by space:")
    .split(" ")
    .map(Number);

total(...arr);