const data = require('../data/zoo_data');

// Função que cria o horário de funcionamento completo do zoológico
const schedule = () => Object.entries(data.hours).reduce((acc, item) => { // O Object.entries transforma os dados em array (anteriormente era um objeto), possibilitando a aplicação de HOF para manipulação dos dados
  let string; // Declaração da variável que guarda informação das horas de funcionamento
  let exhibition; // Declaração da variavel que guarda as informações das exibições
  if (item[1].open === 0 && item[1].close === 0) { // Se os horários forem zero, o zoológico estará fechado (contendo informações diferenciadas)
    string = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  } else { // Caso contrário informará os horários de abertura, encerramento e as exibições disponíveis
    string = `Open from ${item[1].open}am until ${item[1].close}pm`; // Inclui os horários de abertura e fechamento na string usando template literals
    const inicial = data.species.filter((local) => local.availability.includes(item[0])); // Encontra todos as espécies que contém o dia da semana no array availability
    exhibition = inicial.map((element) => element.name); // modifica o array contendo todas as informações da espécie acima, para conter apenas os nomes das espécies
  }
  if (!acc[item[0]]) acc[item[0]] = { officeHour: string, exhibition }; // Condição para criar a chave com o nome da semana e atribuir as informações coletadas nas variáveis string e exhibition no objeto (como valor da chave)
  return acc; // Retorna o acumulador para o próximo loop, até sua finalização
}, {});

const scheduleDay = (day) => Object.entries(data.hours).reduce((acc, item) => {
  if (item[0] === day) { // Encontra o dia passado como parâmetro para retorna apenas a informação de um dia da semana
    const dayPosition = Object.keys(schedule()).indexOf(day); // Obtém o index referente ao dia da semana, através da procura no array contendo os dias da semana obtido nas chaves do horário de funcionamento completo
    const dayInfo = Object.values(schedule())[dayPosition]; // A partir do index obtido acima, retorna o valor do dia da semana em questão
    return { [day]: dayInfo }; // Retorna um objeto que será introduzindo no objeto acumulador
  }
  return acc; // Retorna o acumulador para o próximo loop, até sua finalização
}, {});

const dayExhibition = (animal) => data.species.find((item) => item.name === animal).availability; // retorna a informação de disponibilidade de exibição de uma determina espécie

// Função que contém as diferentes possibilidades de entrada de parâmetro e resposta
function getSchedule(scheduleTarget) {
  const animals = data.species.map((element) => element.name); // Retorna o nome de todas as espécies de animais presentes no zoológico
  const dayOfWeek = Object.keys(data.hours); // Pega as informações de dias da semana
  const animalInfo = animals.some((element) => element === scheduleTarget); // Avalia se for passado como parâmetro o nome de um animal
  const weekInfo = dayOfWeek.some((element) => element === scheduleTarget); // Avalia se for passado como parâmetro um dia da semana
  if (scheduleTarget === undefined) return schedule(); // Se o parâmetro no for definido, retorna horário de funcionamento completo
  if (animalInfo === false && weekInfo === false) return schedule(); // Se não for passado um parâmetro inválido, retorna horário de funcionamento completo
  if (weekInfo === true) return scheduleDay(scheduleTarget); // Se for passado um dia da semana, retorna dos dados de um dia da semana
  return dayExhibition(scheduleTarget); // Se não (neste caso a avaliação dos animais [animalInfo] é true), retorna os dias da semana que a espécie esta disponível para observação
}

module.exports = getSchedule;
