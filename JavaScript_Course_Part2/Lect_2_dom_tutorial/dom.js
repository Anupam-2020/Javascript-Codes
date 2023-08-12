// 1. Browser gives an object called Document which methods/properties to access HTML Elements and apply operations on it.

// Methods in document object which can be applied on HTML elements...................................................
// 1. document.getElementById(""); // returns HTML component which has that particular `Id` in the form of object.
// 2. document.querySelector(""); 
// 3. document.querySelectorAll(""); // This returns Node-list which is array-like object that has all the components with that particular className.

// Methods to change text in HTML component.....................................................
// const heading = getElementById("");
// heading.textContent; // this returns all the text available in that component.
// heading.innerText; // this returns all the text which are visible on the screen and leaves all the texts in which display is : none.

// Methods to change to change stlying...............................................................
// const mainHeading = document.querySelector("div.headline h2");
// mainHeading.style.backgroundColor = 'blue';
// mainHeading.style.border = "2px solid green";

// get and set attributes........................................................................
// attributes -> class, id, type, href, for, style
const link = document.querySelector("a");
console.log(link.getAttribute("href").slice(1));
link.setAttribute("href","https://www.google.com");

const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("type"));

const navItems = document.getElementsByTagName("a"); // returns HTMLCollections which is array-like object.
// applying iteration on HTMLCollections.
// 1. We can't apply forEach method in HTMLCollections.
// Using simple for-loop/ for of loop....
// for(let i = 0; i < navItems.length; i++){
//     const navItem = navItems[i];
//     console.log(navItem.textContent);
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }

// const navItemsUsingQuerySelector = document.querySelectorAll("a"); // returns NodeList...


// INNER HTML..................................................
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML); // innerHTML returns html structure in the form of string....
// headline.innerHTML = "<h1>Inner html changed </h1>";
// headline.innerHTML += "<button class=\"btn\"> Learn More </button>"
// console.log(headline.innerHTML);