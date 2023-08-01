// Criando a matriz bidimensional para armazenar informações dos animais
let animais = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 15],
    ["Tigre", "Felino", 3],
    ["Girafa", "Mamífero", 7],
    ["Águia", "Ave", 10]
  ];
  
  animais.forEach(row => {
    row.forEach(element => {
        console.log(element);
    })
  })
