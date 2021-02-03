const bodyVar = document.querySelector("body");
const pageVar = document.querySelector(".page");
const nameVar = document.querySelector(".name");
const imgVar = document.querySelector("img");
const bioVar = document.querySelector(".short-bio");

bodyVar.style.backgroundColor = "#696969";
pageVar.style.color = "ghostwhite";
nameVar.innerHTML = "DJ Rashad";
imgVar.setAttribute("src", "https://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/rashad.jpg");
bioVar.className += " animated";