let totalCash = Number(prompt("how much cash is in your bag?"));
let watchesCount =  Number(prompt("how many watches?"));
let earringsCount = Number(prompt("how many earrings?"));
let watchesSum = Number(prompt("one watch cost?"));
let earringsSum = Number(prompt("one earrings pair cost?"));

document.body.innerHTML = watchesCount*watchesSum + earringsCount*earringsSum <= totalCash;