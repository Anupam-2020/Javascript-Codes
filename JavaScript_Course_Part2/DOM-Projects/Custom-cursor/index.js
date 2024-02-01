let h1 = document.getElementsByTagName('h1')[0];
let cursor = document.getElementById('cursor');
let main = document.querySelector('#main');

main.addEventListener('mousemove', (e) => {
    console.log(e);
    cursor.style.left = e.x+"px";
    cursor.style.top = e.y+"px";
    // cursor.style.mixBlendMode = "difference"
}, false)