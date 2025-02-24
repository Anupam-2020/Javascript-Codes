// ---------------------------------------------------------------------------------------------

// let class1 = document.getElementById('title').getAttribute('class');
// console.log(class1);
// document.getElementById('title').setAttribute('class', 'newClass');
// let class2 = document.getElementById('title').getAttribute('class');
// console.log(class2);

// let component = document.getElementById('title');
// console.log(component);
// console.log("InnerHTML -> ", component.innerHTML);
// console.log("InnerText ->", component.innerText);
// console.log("textContent ->", component.textContent);
// console.log("OuterHTML -> ", component.outerHTML);
// console.log("OuterText ->", component.outerText);
// component.outerText = "Hello World";
// console.log(document.querySelectorAll('li'));
// let nodeListArray = Array.from(document.querySelectorAll('li'));
// console.log(nodeListArray);
// nodeListArray.forEach((item) => {
//     item.style.color = 'red';
// })

// let h2List = document.getElementsByClassName('list-item');
// console.log(h2List);

// let h2ListArray = Array.from(h2List);
// console.log(h2ListArray);
// h2ListArray.forEach((item) => {
//     console.log(item);
//     item.style.color = 'blue';
// })

// -------------------------------------------------------------------------------------------

// let parent = document.querySelector('.parent');
// console.log(parent);


// console.log(parent.children);
// console.log(parent.children[0].innerText);

// console.log(parent.childNodes);


// -------------------------------------------------------------------------------------------
let ul = document.querySelector('.language');
let count = 1;
const addLanguage = (lang) => {
    let li = document.createElement('li');
    li.setAttribute('class', `language: ${++count}`);
    let text = document.createTextNode(lang);
    li.appendChild(text);
    ul.appendChild(li);
}

addLanguage('JavaScript');
addLanguage('Python');
addLanguage('Java');
addLanguage('C++');
addLanguage('C#');
addLanguage('Ruby');
addLanguage('Go');
addLanguage('Swift');
addLanguage('TypeScript');
addLanguage('Kotlin');


let secondLang = document.querySelector('.language li:nth-child(2)');
console.log(secondLang.innerHTML);

let newLang = document.createElement('li');
let text = document.createTextNode('Rust');
newLang.append(text);
// ul.replaceChild(newLang, secondLang);
ul.insertBefore(newLang, secondLang);  


let lastLang = document.querySelector('.language li:last-child');
lastLang.remove();