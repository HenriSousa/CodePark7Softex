let array = [3, 7, 9, 1, 0]

function isEmpty(objeto) {
    return Object.keys(objeto).length === 0
}
// Formato de Fila (FIFO)
while(!isEmpty(array)){
    array.shift()
}
console.log("Array vazio (FIFO) ", array);


// Formato de Lista
function retirar(objeto) {
    const tamanhoLista = array.indexOf(objeto);
    if(tamanhoLista !== -1) {
        array.splice(tamanhoLista, 1);
        return true;
    } else {
        return false;
    }
}

console.log("Array vazio (Lista) ", 
            retirar(3), retirar(7),
            retirar(9), retirar(1),
            retirar(0));

// Formato de Pilha (LIFO)
while(!isEmpty(array)){
    array.pop();
}

console.log("Array vazio (LIFO) ", array);
