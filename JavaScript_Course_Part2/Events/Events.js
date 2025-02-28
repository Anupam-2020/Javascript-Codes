// ************************** various approach for applying event-listener on HTML-components**********************
// old approach for invoking click listener...
// document.getElementById("china-rose").onclick = function() { 
//     alert("China rose clicked");
// }

// new apporach for invoking click listener...
// document.getElementById("china-rose").addEventListener('click', function(e) {
//     console.log(e);
// }, false)

// ********************************** topics related to events **********************************

// type, timeStamp, defaultPrevent, target, toElement, 
// srcElement, currentTarget, clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode

// ********************************** concept of event propagation. *********************************************

// new apporach for invoking click listener...
// document.getElementById("china-rose").addEventListener('click', function(e) {
//     console.log("Inner element clicked");
//     e.stopPropagation(); // to stop propagation...
// }, false)

// document.getElementById('images').addEventListener('click', function(e) {
//     console.log("UI Element clicked");
// }, false);

// if options is true, then event capturing -> propagation from parent tag to child tag
// if options is false, then event bubling -> propagation from child to parent tag

// document.getElementById('google').addEventListener('click', (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google clicked");
// })

// ********************************** e.target vs e.currentTarget *************************************

// document.getElementById("images").addEventListener('click', (e) => {

//     In this case hierarchy is :-> <ul> -> <li> -> <img>.......................................

//     e.target // returns (img tag) the element which has been clicked on.( if the element has child element then will return the child element which has been clicked)
//     e.currentTarget // returns the element on which we have applied click listener. 

//     console.log(e.target.parentNode); // returns the parent element i.e <li> element.
//     e.target.parentNode.remove(); // M-1 for removing image element...

//     let parentEle = e.target.parentNode;
//     parentEle.parentNode.removeChild(parentEle); // M-2 for removing image element.

//     if(e.target.tagName === "IMG") {
//         console.log(e.target.id);
//         let removeEle = e.target.parentNode;
//         removeEle.remove();
//     }
// }, false)