// asked in IBM online test.

function getProfitOrLoss(events) {
	let map = new Map();
	let watchArray = 0;
	let res = []
	for(let i = 0; i < events.length; i++) {
		switch(events[i].split(" ")[0]) {
			case "BUY": map.set(events[i].split(" ")[1], map.get(events[i].split(" ")[1]) || 0 + events[i].split(" ")[2])
				break;
			case "SELL": map.set(events[i].split(" ")[1], map.get(events[i].split(" ")[1]) - events[i].split(" ")[2])
				break;
			case "CHANGE":
				map.set(events[i].split(" ")[1], map.get(events[i].split(" ")[1])*events[i].split(" ")[2])
				watchArray += map.get(events[i].split(" ")[1])
				break;
			case "QUERY": res.push(watchArray);
				break;
			default:
				break;
		}
	}
		return res
}

console.log(getProfitOrLoss(["BUY googl 20", "BUY appl 30", "SELL googl 10", "CHANGE appl 3", "QUERY", "BUY appl 10", "CHANGE googl -1", "QUERY", "BUY tata 100", "SELL tata 50", "CHANGE tata 7", "QUERY"]));