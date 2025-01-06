let ul = document.querySelector('.language');

// Append *********************************************************************
let count = 1;
function addLanguage(lang) {
    let li = document.createElement('li');
    li.setAttribute('class', `Language: ${++count}`);

    let text = document.createTextNode(lang);
    li.appendChild(text);

    ul.appendChild(li);
}

// let lang = prompt("Enter lanuage");
addLanguage("lang");

// let lang1 = prompt("Enter lanuage");
addLanguage("lang1");

// let lang2 = prompt("Enter lanuage");
addLanguage("lang2");

// let lang3 = prompt("Enter lanuage");
addLanguage("lang3");


// Edit *********************************************************************
let secondLang = document.querySelector(".language li:nth-child(2)");
let newLi = document.createElement('li');
let newText = document.createTextNode('Python');
newLi.appendChild(newText);
secondLang.replaceWith(newLi);
// ul.replaceChild(newLi, secondLang);

// Edit items...
let firstLang = document.querySelector(".language li:first-child");
let newLang = document.createElement('li');
let newText2 = document.createTextNode("Typescript");
newLang.appendChild(newText2);
ul.replaceChild(newLang, firstLang);
// ul.insertBefore(newLang, firstLang);

// Remove *********************************************************************
let lastLang = document.querySelector("li:last-child");
lastLang.remove();



// Note:- 
// 1.-> querySelector() returns elememt.
// 2.-> querySelectorAll() returns NodeList(Array-Like).
// 3.-> getElementByClassName() returns HTMLCollection(Array-Like).
// 4.-> getElementsByTagName() returns HTMLCollection(Array=Like).

console.log(lastLang);
let lastLang2 = document.getElementsByClassName("Language: 4");
console.log(lastLang2[0]);
let lastLang3 = document.getElementsByTagName('div');
