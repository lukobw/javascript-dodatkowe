//ZADANIE NR 1 - PIERWIASTEK Z LICZBY//
var array = [1, 4, 9, 16];

var arrayRoot = array.map(function (number) {
    'use strict';
    return Math.sqrt(number);
});

console.log(array);
console.log(arrayRoot);

//ZADANIE NR 2 - UPPERCASE//

var arrayPets = ['pies', 'kot', 'rybka'];

function upperCase(element) {
    'use strict';
    return element.toUpperCase();
}

var arrayUpper = arrayPets.map(upperCase);

console.log(arrayPets);
console.log(arrayUpper);

