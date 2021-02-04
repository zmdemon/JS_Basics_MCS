

let totalCash = Number(prompt("how much cash is in your bag?"));
let watchesCount = Number(prompt("how many watches?"));
let earringsCount = Number(prompt("how many earrings?"));
let watchesSum = Number(prompt("one watch cost?"));
let earringsSum = Number(prompt("one earrings pair cost?"));
//const result = document.selectorQuery("#result");

let haveEnough = (totalCash, watchesCount, earringsCount, watchesSum,earringsSum) => {	
	if ((watchesCount*watchesSum + earringsCount*earringsSum) <= totalCash) {
		return "Enough $$$";
	} else return "Not enough $$$";
}

//result.innerHTML = haveEnough(totalCash, watchesCount, earringsCount, watchesSum,earringsSum);