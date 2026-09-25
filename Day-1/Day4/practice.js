const fs = require('fs');

// CREATE - Create a file and write data
fs.writeFileSync('data.txt', 'Hello, this is my file.');

// READ - Read the file
let data = fs.readFileSync('data.txt', 'utf8');
console.log("File Content:", data);

// UPDATE - Add/modify data in the file
fs.appendFileSync('data.txt', '\nWelcome to Node.js!');
console.log("File updated.");

// READ again
data = fs.readFileSync('data.txt', 'utf8');
console.log("Updated Content:", data);

// DELETE - Delete the file
fs.unlinkSync('data.txt');
console.log("File deleted.");