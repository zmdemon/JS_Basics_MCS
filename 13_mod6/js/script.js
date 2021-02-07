const list = document.querySelector(".list");
for (let i=0; i<10000; i++) {
    (i%6===0)? list.innerHTML += i + "<br>":"e";
}