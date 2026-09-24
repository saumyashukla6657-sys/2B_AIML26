const Event = require('events');

const eventEmitter = new Event();

eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to the event-driven world.`);
});

eventEmitter.on('exit', (name) => {
    console.log(`Goodbye, ${name}! Exiting the program.`);
});

eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('exit', 'Alice');