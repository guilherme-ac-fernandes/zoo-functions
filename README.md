## Projeto Zoo Functions

#### Consiste na criação de funções (presentes na pasta src) para facilitar a gestão de um zoológico e atender os testes unitários (não presentes neste repositório).
> Esta aplicação foi desenvolvida utilizando a linguagem de programação JavaScript.

Descrição das funcões criadas: 

`calculateEntry`: separada em duas funções mediante a prática de responsabilidade única, a primeira função recebe um array de visitantes no formato abaixo e retorna um objeto com a quantidade de pessoas em casa faixa etária: `{ child: 3, adult: 2, senior: 1 }`; e a segunda função recebe o objeto da primeira função e calcula o valor total a ser pago pelas entradas deste grupo de pessoas presente na constante `entrants`.

```
const  entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];
```

`countAnimals`: esta função é responsável por contabilizar a quantidade de animais de cada espécie em dois casos: (1) quando nenhuma parâmetro for informado retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor; (2) passando como argumento `{ specie: 'penguins' }`, retorna a quantidade de pinguins no zoológico; ou (3) informando como argumento `{ specie: 'giraffes', sex: 'female' }`, retorna a quantidade de girafas do sexo feminino.

`getAnimalMap`: essa função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e sexo; onde o argumento da função pode receber três chaves e apresentar os seguintes retornos: (1) sem argumento - retorna animais categorizados por localização cartesiana; (2) `includeNames: true` - retorna o nome da cada animal no mapeamento geográfico; (3) `includeNames: true + sorted: true` - retorna nomes de animais ordenados; (4) `includeNames: true + sex: 'female'` - retorna o nome dos animal do sexo especificado; (5) combinação das chaves `includeName + sorted + sex`, retorna retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados.

`getAnimalsOlderThan`: esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

`getEmployeeByName`: função responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome.

`getEmployeesCoverage`: essa função é responsável por associar informações de cobertura das pessoas funcionárias, retornando um objeto contendo o id, nome completo, animais responsáveis e suas respectivas localizações. Podendo apresentar as seguintes configurações: (1) sem parâmetro - retorna a relação de todos os funcionários do zoológico; (2) informando nome, sobrenome ou id válidos retorna a relação apenas do funcionário; e (3) dados inválidos será lançado um erro com a mensagem `"Informações inválidas"`.

`getOldestFromFirstSpecies`: função que busca por informações do animal mais velho da primeira espécie gerenciada pela pessoa colaboradora informando o id como parâmetro.

`getRelatedEmployees`: separada em duas funções mediante a prática de responsabilidade única, a função inicial `isManager` verifica se uma pessoa colaboradora é gerente ou não mediante o id informado, retornando true ou false. e a função `getRelatedEmployees` utilizada a resposta da função anterior para duas condições: (1) true - retorna um array contendo os nomes das pessoas colaboradoras que ela é responsável; ou (2) false - se a pessoa não for gerente será lançado um erro com a mensagem `"O id inserido não é de uma pessoa colaboradora gerente!".

`getSchedule`: função que é responsável por disponibilizar as informações de horário dos animais em uma consulta para o usuário, que pode querer ter acesso ao cronograma da semana, de um dia ou de um animal em específico.

`getSpeciesByIds`: função responsável pela busca das espécies de animais por id, podendo receber um ou mais ids. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro.
