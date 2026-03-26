console.time("Timer");

console.log("Olá, mundo!");
console.info("Você está aprendendo JavaScript!");
console.warn("Cuidado! Este é um aviso.");
console.error("Ops! Algo deu errado.");

let nome = prompt("Qual é o seu nome?");

while (nome !== "André")
    nome = prompt("Qual é seu nome?");

console.log("Olá, " + nome + "!\nHoje é dia: " + new Date());

console.table([
    { id: 1, tarefa: "Estudar JS" },
    { id: 2, tarefa: "Praticar código" }
]);

console.group("Grupo de logs");
console.log("Log 1");
console.log("Log 2");
console.groupEnd();

console.timeEnd("Timer");

let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;

console.log(pattern.test("+55(31)99449-0880"));
console.log(pattern.test("+55(31)9449-0880"));
console.log(pattern.test("+55(31)449-0880"));

texto = 41 + "";
console.log(typeof texto);

let task = {
  id: 1,
  title: "Aprender JavaScript",
  completed: false,
  assignee: {
    name: "João",
    email: "joao@example.com"
  },
  toggleComplete() {
    this.completed = !this.completed;
  },

  taskToString()
  {
    console.log(this.id + " " + this.title + " " + this.completed);
  }
};

task.taskToString();

let footballClub = [
    {
        name: "Cruzeiro",
        status: "enorme",

        clubToString()
        {
            console.log(this.name + " é " + this.status);
        }
    },

    {
        name: "São Paulo",
        status: "grande",

        clubToString()
        {
            console.log(this.name + " é " + this.status);
        }
    },

    {
        name: "Corinthians",
        status: "pequeno",

        clubToString()
        {
            console.log(this.name + " é " + this.status);
        }
    },

    {
        name: "Atlético Mineiro",
        status: "átomo",

        clubToString()
        {
            console.log(this.name + " é " + this.status);
        }
    },

    {
        name: "Palmeiras",
        status: "minúsculo",

        clubToString()
        {
            console.log(this.name + " é " + this.status);
        }
    }
];

footballClub.forEach(c => c.clubToString());