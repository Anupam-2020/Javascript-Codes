let boxes = document.querySelectorAll('.box');
// console.log(boxes);

// Change the background colour of whole page on click of individual boxes...
boxes.forEach(function(box) {
    console.log(box);
    box.addEventListener('click', function(e) {
        // console.log(e.target.attributes.style.backgroundColor);
        let colour = e.target.attributes.id.nodeValue;
        document.body.style.backgroundColor = colour;
    })
})