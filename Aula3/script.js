const saudacao = function(nome)
{
  return `Olá, ${nome}`;
}

console.log(saudacao("André"));

console.log(xVar);
var xVar = 10;
console.log(xVar);

let yVar = 50;
console.log(yVar);

// Função que exibe detalhes de uma tarefa
const exibirTarefa = function(id, titulo, prioridade) {
  console.log(`Tarefa #${id}: ${titulo} (Prioridade: ${prioridade})`);
}
exibirTarefa(1, "Estudar JavaScript", "alta");

// Função com valores padrão para parâmetros não informados
const criarTarefa = function(titulo, descricao = "Sem descrição", 
                     prioridade = "média", concluida = false) {
  return {
    id: Date.now(), // Gera um ID único com base no timestamp
    titulo,
    descricao,
    prioridade,
    concluida,
    criada: new Date()
  };
}

const tarefa = criarTarefa("Estudar funções");
console.log(tarefa);

// Função que calcula estatísticas básicas de um array de números
const calcularEstatisticas = function(numeros) {
  let soma = 0;
  let min = numeros[0];
  let max = numeros[0];
  
  // Itera pelo array para acumular a soma e atualizar os valores de min e max
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
    if (numeros[i] < min) {
      min = numeros[i];
    }
    if (numeros[i] > max) {
      max = numeros[i];
    }
  }
  
  const media = soma / numeros.length;
  
  // Retorna os resultados em um objeto
  return { soma, media, min, max };
}

const resultados = calcularEstatisticas([5, 10, 15, 20, 25]);
console.log(resultados);

const formatarData = function(data, formato = "curto")
{
  if(!(data instanceof Date))
  {
    data = new Date();
  }

  if(isNaN(data.getTime()))
  {
    return "Data inválida";
  }

  let diaCheck = "";
  if (data.getDate().toString().length > 1)
  {
    diaCheck = data.getDate().toString();
  } else
  {
    diaCheck = data.getDate().toString().padStart(2, "0");
  }

  let mesCheck = "";
  if (data.getMonth().toString().length > 1)
  {
    mesCheck = (data.getMonth() + 1).toString();
  } else
  {
    mesCheck = (data.getMonth() + 1).toString().padStart(2, "0");
  }

  const dia = diaCheck;
  const mes = mesCheck;
  const ano = data.getFullYear();

  if(formato === "curto")
  {
    return `${dia}/${mes}/${ano}`;
  } else
  {
    const hora = data.getHours();
    const minutos = data.getMinutes();

    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  }
}
console.log("Data formatada (curta):", formatarData(new Date()));
console.log("Data formatada (longa):", formatarData(new Date(), "longo"));

const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(n => n * 2);
console.log("Números dobrados:", dobrados);