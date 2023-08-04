let array = [3, 7, 9, 1, 0]

function isEmpty(objeto) {
    return Object.keys(objeto).length === 0
}

while(!isEmpty(array)){
    array.pop();
}

console.log("Array vazio", array)
