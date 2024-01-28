// document.getElementById('title').id
// document.getElementById('title').className
let class1 = document.getElementById('title').getAttribute('class');
console.log(class1);

// set attribute.
document.getElementById('title').setAttribute('class', 'test');
let class2 = document.getElementById('title').getAttribute('class');
console.log(class2);

let component = document.getElementById('title');
console.log(component);
component.style.backgroundColor = "black";
component.style.fontSize = "45px";
component.style.borderRadius = "10px";
component.style.textAlign = "center";
console.log(component.innerHTML); // prints all the child components present inside the component.
console.log(component.textContent); // All the inner text will be displayed even though display of inner component is `none`...
console.log(component.innerText); // If display of inner component is `none`, then the text associated with that component will not display.

// *****************************

// querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('.test'));
console.log(document.querySelector('#title'));
console.log(document.querySelector('input[type="password"]'));

// querySelectorAll()
let listEle = document.querySelectorAll('li'); // returns NodeList which is similar to arrays but not array.
console.log(listEle);
let nodeListToArray = Array.from(listEle); // convert nodeList to array.
console.log(nodeListToArray);
nodeListToArray.map(function (l) {
    l.style.color = "#3a4777";
})

// getElementByClassName()
let h2List = document.getElementsByClassName('list-item'); // returns HTMLCollection which is different from NodeList and Arrays
console.log(h2List);

let h2ListToArray = Array.from(h2List);
console.log(h2ListToArray);

h2ListToArray.map(function(li) {
    li.style.backgroundColor = "#771f1f"
    console.log(li);
})