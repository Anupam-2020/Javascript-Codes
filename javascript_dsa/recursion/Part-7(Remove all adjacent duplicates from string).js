// remove all adjacent duplicates from string...


// M - 1.............................................................................
function removeAdjacentDuplicates(string) {
	let count = 0;
	for(let i = 0; i < string.length; i++) {
		let flag = 0;
		let j = i;
		while(string.charAt(j) === string.charAt(j+1)) {
			let str = string.split("");
			str.splice(i, 1);
			string = str.join("");
			flag = 1;
		}
		if(flag === 1) {
			count++;
			let str = string.split("");
			str.splice(j, 1);
			string = str.join("");
			i--;
		}
	}
	if(count === 0) return string; 
	return removeAdjacentDuplicates(string)
}

let str1 = "aabccba";
let str2 = "abccbccbcca";
let str3 = "geegksforgeeg";
let str4 = "acaaabbbacdddd";
console.log(removeAdjacentDuplicates(str3));



// M - 2.............................................................................
function removeAdjacentDuplicates2(string) {
	let result = "";
	for(let i = 0; i < string.length; i++) {
		let j = i;
		while(j < string.length && string.charAt(j) === string.charAt(i)) {
			j++;
		}
		if(j === i+1) {
			result = result + string.charAt(i);
		} else {
			i = j;
			i--;
		}
	}

	if(result.length < string.length) {
		return removeAdjacentDuplicates2(result)
	} else {
		return result;
	}
}

console.log(removeAdjacentDuplicates2(str1));