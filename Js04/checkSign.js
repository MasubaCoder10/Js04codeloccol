const affiche = function(x) {
    if (x < 0) console.log(`Negatif`);
    else if (x > 0 || x == 0) {
        console.log(`Positif`);
    }
}

affiche(-10);
affiche(10);
affiche(0);

module.exports = checkSign