let numUm;
let soma = 0;
let contagem = 0;

while (numUm != 0) {
    numUm = Number(prompt("Digite um número. (Caso digite 0, a contagem se encerrará.)"));

    if (isNaN(numUm)) {
        alert("Digite um número válido.");
    } else {
        if (numUm != 0) {
            contagem += 1;
            soma += numUm;
        }
    }
}

alert(`Foram digitados ${contagem} números. A soma total foi de ${soma}. A média é ${(soma / contagem).toFixed(2)}`);
