document.body.style.backgroundColor = "#24afd9";

let flag = 0;
document.getElementById('add-remove-btn').addEventListener('click', (e) => {
    let status = document.getElementById("status");
    
    if(flag === 0) {
        console.log(e.target.parentNode);
        status.innerText = "Friend";
        status.style.color = "#17c51a";
        e.target.style.backgroundColor = "red";
        e.target.innerText = "Remove"
        flag = 1;
    } else {
        status.innerText = "Stranger";
        status.style.color = "red";
        e.target.style.backgroundColor = "rgb(2, 125, 84)";
        e.target.innerText = "Add"
        flag = 0;
    }
}, false)