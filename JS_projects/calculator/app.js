let input = document.querySelector("input");
let buttons = document.querySelectorAll(".button");


let string = "";
Array.from(buttons).forEach((item) => {
    item.addEventListener("click", (e) => {
        if(e.target.innerHTML === "=") {
            string = eval(string);
            input.value = string;
        } else if(e.target.innerHTML === "AC") {
            string = "";
        } else {
            string += e.target.innerHTML;
        }
        input.value = string == "" ? "0" : string;
    })
})