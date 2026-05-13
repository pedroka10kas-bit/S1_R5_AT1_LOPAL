let numUm = Number(prompt("Digite um número para ver a sua tabuada!"));
let mensagem = "";

if (isNaN(numUm)) {
    alert("Número inválido!");
}
else {
    for (let i = 1; i <= 10; i += 1) {
        let resultado = numUm * i;

        alert(`${numUm} x ${i} = ${resultado}`);
    }
}
