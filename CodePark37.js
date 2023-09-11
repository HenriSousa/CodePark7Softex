// 1: Pode utilizar o pacote lodash para facilitar na manipulção de array
// 2: npm install lodash
// 3: const lodash = require('lodash');
// 4: chunk: permite dividir um array em pedaços menores
//    concat permite concatenar arrays.
// 5: [ [ 23, 9, 7, 12 ], [ 4, 45, 7, 12 ] ]

const lodash = require('lodash');

const array1 = [23, 9, 4, 45]
const array2 = [7, 12]

const dividirArray = lodash.chunk(array1, 2)

const juntarArray = dividirArray.map(dividirArray => lodash.concat(dividirArray, array2))

console.log(juntarArray)