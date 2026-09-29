const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
eventEmitter.on('Login', (name) => {
    console.log(`Welcome, ${name}! You have successfully logged in.`);
});

eventEmitter.on('logout', (name) => {
    console.log(` ${name}! You have successfully logged out.`);
});
eventEmitter.on('order', (item) => {
    console.log(`Order placed for ${item}`);
});

eventEmitter.on('error', (message) => {
    console.log(`Error: ${message}`);
});
eventEmitter.emit('Login', 'Saumya');
eventEmitter.emit('order', 'Laptop');
eventEmitter.emit('logout', 'Saumya');
eventEmitter.emit('error', 'Something went wrong! Please try again later.');