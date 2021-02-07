const form = document.forms[0];
const angleSpan = document.querySelector("#input-angle");
const sinSpan = document.querySelector("#output-sin");

form.onsubmit = function (e) {
    e.preventDefault();
    let angle = Number(form.elements.angle.value);
    if (angle===0 || Boolean(angle)) {
        angleSpan.innerHTML = angle + "°";
        let deg = Math.PI * angle/180;
        let sin = Math.round(Math.sin(deg) * 1000)/1000;
        sinSpan.innerHTML = sin ;

    } else {
        angleSpan.innerHTML = "??)";
        sinSpan.innerHTML = "???";
    }



}