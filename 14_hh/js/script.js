let newSchool = [
    [
        ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
        ['Sonny Digital', 'Metro Boomin', '12Hunna']
    ],
    [
        ['Yung Lean', 'Ecco2K', 'Bladee'],
        ['Whitearmor', 'PJ Beats', 'Yung Gud']
    ]
];

newSchool.forEach(function (country) {
    country.forEach(function (profession) {
        profession.forEach(function (name) {
            console.log(name);
        })
    })
})

for (country in newSchool) {
    for (profession in newSchool[country]) {
        for (name in newSchool[country][profession])
            console.log(newSchool[country][profession][name]);
    }
}



