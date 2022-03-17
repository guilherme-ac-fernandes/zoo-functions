const data = require('../data/zoo_data');

// Função que criar o mapeamento geográfico apenas para as localização
const getRegions = () => data.species.reduce((acc, element) => {
  if (!acc[element.location]) { // Caso o objeto não tenha essa chave, ela será criada e tendo como valor um array vazio
    acc[element.location] = [];
  }
  acc[element.location].push(element.name); // Para todos as interações, será localizada a posição da chave da espécie (objeto de cada espécie) e o nome será incluído no array respectivo
  return acc; // Retorna o acumulador para o próximo loop, até sua finalização
}, {});

// Função que criar o mapeamento com filter e sort
const getRegionWithNameAndSex = (sexAnimal, sorted) => data.species.reduce((acc, element) => {
  if (!acc[element.location]) { // Cria as chaves caso não exista e colocar como valor um array vazio
    acc[element.location] = [];
  }
  let position = element.residents; // Defini a posição inicial para realizar as interações
  if (sexAnimal !== undefined) { // Se o sexo for definido, filtra os dados acima para contem apenas os indivíduos com o sexo estipulado
    position = position.filter((item) => item.sex === sexAnimal);
  }
  const allSexNames = position.map((item2) => item2.name); // Retorna um array contendo apenas os nomes dos indivíduos de cada espécie, após a filtragem de sexo (caso necessária)
  if (sorted === true) { // Se o parâmetro de ordenação alfabética for true, ordena o array allSexNames organizado pela HOF map para conter apenas os nomes
    allSexNames.sort();
  }
  // Utilização do objecto entres [] para não causar erro ao atribuir como key do objeto observado a utilização como exemplo no StackOverflow
  // source: https://stackoverflow.com/questions/2274242/how-to-use-a-variable-for-a-key-in-a-javascript-object-literal
  const animalObject = { [element.name]: allSexNames }; // Criar um objeto contendo o nome da espécia e como valor os nomes após os parâmetros opcionais
  acc[element.location].push(animalObject); // inclui o objeto criando para cada espécie na respectiva chave de localidade
  return acc; // Retorna o acumulador para o próximo loop, até sua finalização
}, {});

function getAnimalMap(options) {
  if (options === undefined) return getRegions(); // Função sem parâmetro retorna um objeto contendo as posições cardeais como chaves e os animais de cada localidade como valores (referente a função getRegions())
  const { includeNames, sex, sorted } = options; // Desestruturação do objeto passado como parâmetro
  if (!includeNames) return getRegions(); // Se includeNames for false, retornar o contendo os pontos cardeais e os nomes dos animais
  if (includeNames) return getRegionWithNameAndSex(sex, sorted); // Se includeNames for true, retorna o objeto anterior, mas contendo os nomes de cada residente de todas as espécies. Podendo ser filtrada em relação ao sexo e ordenado por ordem alfabética
}

module.exports = getAnimalMap;
