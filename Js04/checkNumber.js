const affiche = function(x) {
    switch (x) {
        case 1:
        case 2:
        case 3:
        case 4:

            console.log(`Faible`);
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log(`Moyen`);
            break;
        default:
            console.log("Please, choose a number from 1 to 10:");
    }


}

affiche(1);
affiche(5);
affiche(6);

module.exports = checkNumber