// tuples are arrays with more restrictions on elements wrt data-type...

let User : [string, number, boolean];

User = ["123", 32, false];

let rgb: [number, number, number];

rgb = [255,255,255];

type User = [number, string];

const newUser: User = [12, "Anupam"];

newUser[1] = "34";

// newUser.push("23"); // this is bug in tuple...

console.log(newUser);