// setTimeout

console.log("script started");

function hello() {
    console.log("Hello team!");
}

const id = setTimeout(hello, 1000);

// for(let i = 0; i < 10000; i++) {
//     console.log("Hello");
// }

console.log("clearing timeout");
clearTimeout(id); // when we apply clearTimeout... setTimeout gets cleared from stack and won't give any output.
console.log("Script ends");