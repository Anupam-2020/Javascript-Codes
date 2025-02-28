let api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
let cardContainer = document.querySelector(".container");
let data = [];

async function getData(api) {
    let resp = await fetch(api)
    let json = await resp.json()
    let data = json;
    console.log(data)
    
    for(let i = 0; i < data.length; i++) {
        cardContainer.innerHTML += `<div class="data">
        <div class="image">
            <img class="image" src=${data[i].image}/>
        </div>
        <div class="data-container">
            <div class="upper">
                <div class="name">${data[i].id}</div>
                <div class="value">${data[i].current_price}</div>
            </div>
            <div class="lower">
                <div class="short">${data[i].symbol}</div>
                <div style="color: ${data[i].market_cap_change_percentage_24h > 0 ? "green" : "red"};" class="pert">${data[i].market_cap_change_percentage_24h}%</div>
            </div>
        </div>
    </div>`
    }
}

getData(api);