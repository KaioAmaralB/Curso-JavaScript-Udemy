/*
Sistema de cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 095864;

/*
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(numCliente);
idade = 25;
console.log(idade);
*/

let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
ehBomPagador = true;

/* OPERADORDES
 Montante = valorEmprestimo + juros
    Juros = valorEmprestimo * taxaDeJuros * numAnos
*/

let juros = valorEmprestimo * taxaDeJuros * numAnos;
let montante = valorEmprestimo + juros;
console.log("Valor do montante: " + montante);

/*ESTRUTURAS CONDICIONAIS
Bom pagador ou não?
*/

if(ehBomPagador) {
    console.log("O cliente " + nome + " é um bom pagador.");
}else {
    console.log("O cliente " + nome + " não é um bom pagador.")
}

//ELSE IF - Taxa de juros por idade

 /*
 18-25 anos -> 9%
 26-35 anos -> 8%
 36-50 anos -> 7%
 51 ou mais -> 6% 
 */ 

 if(idade >= 18 && idade <= 25){
     taxaDeJuros = 0.09;
 }else if(idade >= 26 && idade <= 35){
    taxaDeJuros = 0.08;
}else if(idade >= 36 && idade <= 50){
    taxaDeJuros = 0.07;
}else{
    taxaDeJuros = 0.06;
}
console.log(taxaDeJuros);
