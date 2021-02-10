function haveEnough() {
    const totalCash = Number(prompt("how much cash is in your bag?"));
    const watchesCount = Number(prompt("how many watches?"));
    const earringsCount = Number(prompt("how many earrings?"));
    const watchesSum = Number(prompt("one watch cost?"));
    const earringsSum = Number(prompt("one earrings pair cost?"));
    if ((watchesCount * watchesSum + earringsCount * earringsSum) <= totalCash) {
        return "Enough $$$";
    } else return "Not enough $$$";
}