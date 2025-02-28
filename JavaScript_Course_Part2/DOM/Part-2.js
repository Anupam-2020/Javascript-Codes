const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children); // returns HTMLCollection of all the child components present inside. 
console.log(parent.children[0].innerHTML);

for(let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
parent.children[1].style.backgroundColor = "black";

console.log(parent.firstElementChild); // returns first child element
console.log(parent.lastElementChild); 

const dayOne = document.querySelector('.day');
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log(parent.childNodes); // returns nodeList of all child elements with additional data.