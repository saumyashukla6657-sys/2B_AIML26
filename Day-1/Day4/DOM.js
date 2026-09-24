const EventEmitter = require('events');
class button extends EventEmitter {
    click() {
        console.log("Button clicked");
        this.emit('click');
    }
}

const myButton = new button();
myButton.on('click', () => {
    console.log("Click event handled!");
});
myButton.click();