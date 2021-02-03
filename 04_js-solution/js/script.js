const body = document.querySelector("body");
const page = document.querySelector(".page");
const name = document.querySelector(".name");
const img = document.querySelector("img");
const bio = document.querySelector(".short-bio");

body.style.backgroundColor = "#696969";
page.style.color = "ghostwhite";
name.innerHTML = "DJ Rashad";
img.setAttribute("src", "https://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/rashad.jpg");
bio.className += " animated";