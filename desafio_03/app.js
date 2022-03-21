/*
Desafio

Faça um programa que receba três valores de tempo gasto, referentes a cada
corredor, para relizar a prova e exiba no browser qual deles foi o vencedor.
*/

let Usain = "02:10:01";
let Flash = "02:07:20";
let Rapidinho = "02:08:40";

console.log("Vencedor foi o: " + (Usain < Flash && Usain < Rapidinho ? "Usain." : (Flash < Usain && Flash < Rapidinho ? "Flash." : (Rapidinho < Usain && Rapidinho < Flash ? "Rapidinho." : "Erro no digitação do tempo"))));
