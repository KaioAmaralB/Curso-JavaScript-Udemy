/*
Sistema de cadastro de clientes
*/

let nome = "Manuel";
let sobrenome = "Silva";
let idade = 24;
const numCliente = 095864;
let valorEmprestimo = 150000;
let taxaDeJuros = 0.10;
let numAnos = 6;
ehBomPagador = true;

/*ESTRUTURAS CONDICIONAIS
Bom pagador ou não?

if(ehBomPagador) {
    console.log("O cliente " + nome + " é um bom pagador.");
}else {
    console.log("O cliente " + nome + " não é um bom pagador.")
}
*/

//OPERADOR TERNÁRIO
console.log("O cliente " + nome + (ehBomPagador ? " é bom pagador." : " não é bom pagador."));

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

/* 
Empresa de desenvolvimento de software

Programador Junior -> 4 Mil
Programador Pleno -> 5 Mil
Programador Senior -> 6 Mil
Testador -> 5 Mil
Arquiteto -> 8 Mil
Analista -> 7 Mil
Gerente -> 10 Mil
*/

let cargo = "Programador Junior";

switch(cargo){
    case "Programador Junior":
        console.log("O programador Junior recebe R$ 4000.");
        break;
    case "Programador Pleno":
        console.log("O programador Pleno recebe R$ 5000.");
        break;
    case "Programador Senior":
        console.log("O programador Senior recebe R$ 6000.");
        break;
    case "Testador":
        console.log("O testador recebe R$ 5000.");
        break;
    case "Arquiteto":
        console.log("O Arquiteto recebe R$ 8000.");
        break;  
    case "Analista":
        console.log("O Analista recebe R$ 7000.");
        break;
    case "Gerente":
        console.log("O Gerente recebe R$ 10000.");
        break;
    default:
        console.log("Cargo não cadastrado");
}
