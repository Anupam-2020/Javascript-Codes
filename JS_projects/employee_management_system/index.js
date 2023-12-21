function sayHello(message, message1) {
    console.log(`${message} ${this.name}, ${message1}`); 
}

let obj1 = {
    name: "Anupam"
}

const func = sayHello.bind(obj1, "Hello", "how are you");
func();

function getCallback(callback) {
    let name = "Anupam";
    callback(name)
}

function makeCallback(arg) {
    console.log(arg);
}

getCallback(makeCallback);