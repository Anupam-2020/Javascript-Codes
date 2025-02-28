document.querySelector('body').style.backgroundColor = "#323030";

const divEle = document.createElement('div');
console.log(divEle);
divEle.className = "parent1";
divEle.style.backgroundColor = "purple";
divEle.style.padding = "12px";

// M-1 for creating child element.
divEle.innerHTML = "<h1>Hello World</h1>"; // expensive method.

// M-2 for creating child element.
const heading = document.createElement('h1');
const addText = document.createTextNode('Hello World');
heading.appendChild(addText);
divEle.appendChild(heading);


document.body.appendChild(divEle); // we need to set the created element into document using appendChild.