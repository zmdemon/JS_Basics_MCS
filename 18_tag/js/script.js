window.addEventListener("load", function () {
    const APIKey = '86d7eac094f6e0b83461ce08010bc713';
    const city = 'Moscow';
    const form = document.forms[0];

    class Person {
        constructor(name) {
            this.name = name;
            this.happiness = 0;
        }

        //class methods
        hasCat() {
            return this.happiness += 1;
        }

        hasRest() {
            return this.happiness += 1;
        }

        hasMoney() {
            return this.happiness += 1;
        }

        isSunny() {
            let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + APIKey;
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, false);
            xhr.send();
            if (xhr.status === 200) {
                let DATA = JSON.parse(xhr.responseText);
                if (DATA.main.temp > 288) {
                    return this.happiness += 1;
                } else return this.happiness;
            } else return this.happiness;
        }
    }

    form.onsubmit = function (e) {
        e.preventDefault();

        const personName = document.querySelector(".personName");
        const icon = document.querySelector(".icon");
        let name = form.elements.name.value;
        let hasCat = form.elements.cat.value;
        let hasRest = form.elements.rest.value;
        let hasMoney = form.elements.money.value;

        if (name === "" || hasMoney === "" || hasCat === "" || hasRest === "") {
            name !== "" ? personName.innerHTML = name + ":" : personName.innerHTML = "";
            icon.innerHTML = "🤔";
        } else {
            let newPerson = new Person(name);
            if (hasCat === "yes") newPerson.hasCat();
            if (hasRest === "yes") newPerson.hasRest();
            if (hasMoney === "yes") newPerson.hasMoney();
            newPerson.isSunny();
            console.log(hasCat, hasRest, hasMoney);
            console.log(typeof (hasCat), hasRest === "yes", hasMoney === "yes");
            console.log(newPerson.happiness);

            name !== "" ? personName.innerHTML = name + ":" : personName.innerHTML = "";

            switch (newPerson.happiness) {
                case 2:
                case 3:
                    icon.innerHTML = "😐";
                    break;
                case 4:
                    icon.innerHTML = "😄";
                    break;
                default:
                    icon.innerHTML = "☹";
                    break;
            }
        }

    }


})