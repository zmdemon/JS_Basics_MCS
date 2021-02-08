const APIKey = '86d7eac094f6e0b83461ce08010bc713';
// const city = 'Moscow';
// const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey;

const form = document.forms[0];
const tempSpan = document.querySelector("#temperature");
const humSpan = document.querySelector("#humidity");
const citySpan = document.querySelector("#cityName");


form.onsubmit = function (e) {
    e.preventDefault();
    let city = form.elements.city.value;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status === 200) {
        let DATA = JSON.parse(xhr.responseText);
        //console.log(DATA);
        citySpan.innerHTML = form.elements.city.value;
        tempSpan.innerHTML = Math.round(DATA.main.temp - 273) + "°C";
        humSpan.innerHTML = DATA.main.humidity + "%";

    } else console.log(xhr.status);

}
