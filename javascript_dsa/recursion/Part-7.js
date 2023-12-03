// // remove all adjacent duplicates...



// function removeUtil(string, last_removed) {

// 	// If length of string is 1 or 0
// 	if(string.length == 0 || string.length == 1)
// 		return string

// 	// Remove leftmost same characters and recur for remaining string
// 	if(string.charAt(0) == string.charAt(1)){
// 		last_removed = string.charCodeAt(0)
// 		while(string.length > 1 && string[0] == string[1])
// 			string = string.substr(1,)
// 		string = string.substr(1,)

// 		return removeUtil(string, last_removed)
// 	}

// 	// At this point, the first character is functionality different from its adjacent. 
//     // Ignore first character and recursively remove characters from remaining string
// 	let rem_str = removeUtil(string.substr(1,), last_removed)

// 	// Check if the first character of the rem_string matches with the first character of the original string
// 	if(rem_str.length != 0 && rem_str[0] == string[0]){
// 		last_removed = string.charCodeAt(0)
// 		return rem_str.substr(1,)
// 	}

// 	// If remaining string becomes empty and last removed character is same as first character of original string. 
//     // This is needed for a string like "acbbcddc"
// 	if(rem_str.length == 0 && last_removed == string.charCodeAt(0))
// 		return rem_str

// 	// If the two first characters of str and rem_str don't match, 
// 	// push first character of str before the first character of rem_str.
// 	let res = string[0] + rem_str

// 	return res
// }

// function remove(string){
// 	let last_removed = 0
// 	return removeUtil(string,last_removed)
// }

// let string1 = "geeksforgag"

// let string3 = "caaabbcaac"
// console.log(remove(string1))


// function removeDuplicates(string) {
// 	if(string.length === 1) return string;

// 	if(string.charAt(0) === string.charAt(1)) {
// 		while(string.length >= 1 && string.charAt(0) === string.charAt(1)) {
// 			string = string.substring(1,)
// 		}
// 		string = string.substring(1,)

// 		return removeDuplicates(string)
// 	}

// 	return removeDuplicates(string.substring(1,));
// }

// console.log(removeDuplicates(string3))


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