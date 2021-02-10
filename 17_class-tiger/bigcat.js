class Tiger {
    constructor(name) {
        this.name = name;
    }

    feedCat() {
        return console.log("Purrrrrr");
    }
}

class angryTiger extends Tiger {
    throwDart() {
        console.log("ZzZzzZzZz");
    }
}

const Sharkhan = new Tiger("Sharkhan");

const Tigra = new angryTiger("Tigra");

Tigra.feedCat();
Tigra.throwDart();