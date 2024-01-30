let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let heightInput = document.querySelector('.heights');
    let weightInput = document.querySelector('.weights');
    let height = parseInt(heightInput.value); 
    let weight = parseInt(weightInput.value);
    let results = document.createElement("div");

    if(height === null || height === undefined || isNaN(height)) {
        let error = document.createTextNode("Enter a valid number");
        console.log(error);
        results.appendChild(error);
    } else {
        let result = document.createTextNode(parseInt((weight * 10000) / (height*height)).toString());
        console.log(result);
        results.appendChild(result);
    }
    document.body.appendChild(results);
})