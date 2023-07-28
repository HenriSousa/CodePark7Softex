const prompt = require('prompt-sync')();

const candidatos = {
    candidato_X: 0,
    candidato_Y: 0,
    candidato_Z: 0,
    Branco: 0,
};
function votar() {
    const voto = prompt("Candidatos:\n-candidato_X = 889\n-candidato_Y = 847\n-candidato_Z = 515\n-Branco = 0\nDigite o número do candidato ou 'F' para finalizar a votação: ");
    if (voto === null) {
        return null;
    }
    if (voto.toLowerCase() === 'f') {
        return null;
    }
    const numeroVoto = parseInt(voto);
    if (isNaN(numeroVoto)) {
        console.log("Voto inválido! Por favor, vote novamente.");
        return votar();
    }
    if (numeroVoto == 889 || numeroVoto == 847 || numeroVoto == 515 || numeroVoto == 0) {
        return numeroVoto;
    } else {
        console.log("Voto inválido! Por favor, vote novamente.");
        return votar();
    }
}
while (true) {
    const voto = votar();
    if (voto === null) {
        break;
    }
    switch (voto) {
        case 889:
            candidatos.candidato_X += 1;
            break;
        case 847:
            candidatos.candidato_Y += 1;
            break;
        case 515:
            candidatos.candidato_Z += 1;
            break;
        case 0:
            candidatos.Branco += 1;
            break;
    }
}
const totalVotos = candidatos.candidato_X + candidatos.candidato_Y + candidatos.candidato_Z + candidatos.Branco;
const totalValidos = totalVotos - candidatos.Branco;
const vencedor = Object.keys(candidatos).reduce((a, b) => candidatos[a] > candidatos[b] ? a : b);
console.log("Resultado da Eleição:");
console.log("------------------------");
console.log("Total de votos: ", totalVotos);
console.log("Votos válidos: ", totalValidos);
console.log("Votos em branco: ", candidatos.Branco);
console.log("Votos nulos: ", totalVotos - totalValidos);
console.log("------------------------");
console.log("Vencedor: ", vencedor);
console.log("Número de votos do vencedor: ", candidatos[vencedor]);
console.log("------------------------");
console.log("Detalhes por candidato:");
for (const candidato in candidatos) {
    console.log(`${candidato}: ${candidatos[candidato]} votos`);
}
