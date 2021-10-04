// Exo For
// P1
for (let i = 0; i <= 20; i++) {
    console.log(i);
};
// P2
for (let i = 0; i <= 20; i++) {
    switch(i%2 == 0) {
        case true:
            console.log(`${i} est un nombre pair`);
            break;
        case false:
            console.log(`${i} est un nombre impair`);
            break;
    };  
};
// P3
let coding = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "mexence", "zulma"]
console.log(coding);
for (let i = 0; i < coding.length; i++) {
    console.log(`bonjour ${coding[i]}`);
    
}
// P4
let nombre = prompt('un nombre')
for (let i = 0; i <= nombre; i++) {
    console.log(i);;
    
}
// Foreach
// P1
let monTab  = ['molengeek', 'jnt', 'bxl', 'vroumvroum', 'frite']
monTab.forEach(element => {
    console.log(element);
});
// P2
let coding = ["saliou", "zakaria", "ayoub", "mohammed", "alex", "adame", "sebastien", "achraf", "bene", "abdellah", "malo", "louise", "natchez", "dawid", "maximilien", "jamila", "mexence", "zulma"]

coding.forEach(el => {
    console.log(`Bonjour ${el}`);
});
// P3
coding.forEach((e, i) => {
    console.log(`Element -> ${e}\n Position -> ${i}`);
});