const board = document.querySelector(".board");

let crypto = [
    {
        name: "Leetcoin",
        price: 1337
    },
    {
        name: "Dogecoin",
        price: 231.523
    },
    {
        name: "Bitcoin Hash",
        price: 419
    },
    {
        name: "EFear",
        price: 282
    },
    {
        name: "Rarecoin",
        price: 616.1
    },
    {
        name: "Solo USD",
        price: 322
    },
    {
        name: "Sdash",
        price: 66.6
    }
];

let colors = ['#6b5b95', '#feb236', '#d64161', '#ff7b25', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

for (let i=0; i<crypto.length; i++) {
    board.innerHTML += "<div class=\"crypto\">\n" +
        "\t\t\t<h1 class=\"title\"></h1>\n" +
        "\t\t\t<p class=\"amount\"></p>\n" +
        "\t\t\t<div class=\"bar\"></div>\n" +
        "\t\t</div>";
}

const titles = document.querySelectorAll(".title");
const prices = document.querySelectorAll(".amount");
const bars = document.querySelectorAll(".bar");


for (let i=0; i<crypto.length; i++) {
    titles[i].innerHTML = crypto[i].name;
    prices[i].innerHTML = crypto[i].price;
    bars[i].style.width = crypto[i].price/2 + "px";
    bars[i].style.backgroundColor = colors[Math.floor(Math.random()*50)];

}

