let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// push() - adds element at the end
arr.push(60);
console.log("After push:", arr);

// pop() - removes element from the end
arr.pop();
console.log("After pop:", arr);

// unshift() - adds element at the beginning
arr.unshift(5);
console.log("After unshift:", arr);

// shift() - removes element from the beginning
arr.shift();
console.log("After shift:", arr);

// slice() - extracts a part of array
let newArr = arr.slice(1, 4);
console.log("After slice:", newArr);

// splice() - adds/removes elements
arr.splice(2, 1, 100);
console.log("After splice:", arr);