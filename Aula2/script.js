let a = 5, b = 10;

console.log(a == b);   // false (igualdade)
console.log(a === b);  // false (igualdade estrita)
console.log(a != b);   // true (diferente)
console.log(a !== b);  // true (diferente estrito)
console.log(a < b);    // true (menor que)
console.log(a > b);    // false (maior que)
console.log(a <= b);   // true (menor ou igual)
console.log(a >= b);   // false (maior ou igual)

let idade = prompt("Qual sua idade?");
let temCarteira = prompt("Tem carteira? (s/n)")

if(temCarteira.toString() === "s") temCarteira = true;
else if(temCarteira.toString() === "n") temCarteira = false;

if (idade >= 18 && temCarteira) {
  console.log("\nPode dirigir");
} else if (idade < 18) {
  console.log("\nNão pode dirigir");
} else if (idade >= 18 && !temCarteira) {
  console.log("\nPrecisa de carteira");
}

let prioridade = parseInt(prompt("Qual é a prioridade da tarefa?"));

if (prioridade === 1) {
  console.log("\nPrioridade Baixa");
} else if (prioridade === 2) {
  console.log("\nPrioridade Média");
} else if (prioridade === 3) {
  console.log("\nPrioridade Alta");
} else {
  console.log("\nPrioridade desconhecida");
}

let diaSemana = new Date().getDay();

console.log("");

switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
        break;
}

let diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

for (let dia of diasSemana)
{
    if(diasSemana.indexOf(dia) === diaSemana) console.log(diasSemana.at(diasSemana.indexOf(dia)));
}