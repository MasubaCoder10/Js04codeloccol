function pairImpair(x) {
    let z = (x % 2)
    switch (z) {
        case 0:
            return console.log(`Pair`);
            break;
        case 1:
            return console.log(`Impair`);
            break;


    }
}

pairImpair(15);
pairImpair(10);


module.exports = checkEvenOdd
