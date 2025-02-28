// setInterval.

const body = document.body;
const id = setInterval(() => {
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
},500);


const buttonId = document.querySelector('button');
buttonId.addEventListener("click", () => {
    clearInterval(id) // clearInterval does the same as clearTimeout.
    buttonId.textContent = body.style.backgroundColor;
})

