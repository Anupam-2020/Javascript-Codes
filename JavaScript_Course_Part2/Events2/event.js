let div = document.querySelector('div');
let button = document.querySelector('button');
let form = document.querySelector('form');

div.addEventListener('click', function() {
  alert('div clicked');
}, {
    capture: false
});

form.addEventListener('click', function(event) {
  event.stopPropagation();
  alert('form submitted');
}, true);

button.addEventListener('click', function() {
    alert('button clicked');
}, true);

// Event Bubbling - When an event is fired on an element that has parent elements, the event will bubble up from the target element to the root element. This is called event bubbling.
// Event Capturing - When an event is fired on an element that has parent elements, the event will first be captured by the root element and then propagated to the target element. This is called event capturing.

// event delegation - It is a technique to add event listeners to a parent element instead of adding them to the child elements and call event on child elements using event.target.

document.querySelector('.languages').addEventListener('click', function(event) {
  if(event.target.closest('SPAN')) {
    // alert(`You clicked on ${event.target.textContent}`);
    console.log(`You clicked on ${event.target.textContent}`);
    window.location.href += '/' + event.target.closest("SPAN").className; // redirect to the clicked language page.
  }
});

// document.querySelector('.python').addEventListener('click', (event) => {
//     console.log(event.currentTarget);
// })

// e.target // returns (img tag) the element which has been clicked on.( if the element has child element then will return the child element which has been clicked)
// e.currentTarget // returns the element on which we have applied click listener.


// Modal toggle application.(example of event delegation).
let modalButton = document.querySelector('.modal-button');
modalButton.addEventListener('click', () => {
    toggleModal(true);
});


function toggleModal(value) {
    document.querySelector('.modal').style.display = value ? "flex" : "none";
}


document.querySelector('.modal').addEventListener('click', (e) => {
    console.log(e.target);
    
    if(e.target.className === "modal") {
        e.target.style.display = "none";
        console.log('modal-content clicked');
    }
})