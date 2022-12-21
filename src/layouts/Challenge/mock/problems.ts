export const problems = [
  {
    name: 'Desafio 2',
    description: 'Descrição 2',
    xp: 68,
    problems: [
      {
        id: 1,
        problem: "?? carro = 'Gol'",
        description:
          "Crie uma variavel chamada 'carro' que recebe a string 'Gol'",
        correctWords: 'let',
        randomWords: 'let, for, while, if, break, i++, const, forEach',
        xp: 16,
        level: 'easy',
      },
      {
        id: 2,
        problem: 'if(5 ?? 6){console.log(true)}',
        description: 'Qual a opção para entrar na condicional do IF?',
        correctWords: '>',
        randomWords: '=, <, if, >, i++, <=, forEach',
        xp: 26,
        level: 'easy',
      },
      {
        id: 3,
        problem: 'alert(15 ?? 9)',
        description: 'Alerte o restante quando 15 for dividido por 9.',
        correctWords: '%',
        randomWords: '%, =, <, if, break, i++, <=, forEach',
        xp: 36,
        level: 'easy',
      },
      {
        id: 4,
        problem: 'x = 10, y = 5    x ?? y;',
        description:
          'Use o operador de atribuição correto que resultará em x ser 15(igual a x = x + y).',
        correctWords: '+=',
        randomWords: '%, =, +=, if, ++, i++, <=, forEach',
        xp: 26,
        level: 'easy',
      },
    ],
  },

  {
    name: 'Desafio 1',
    description: 'Descrição 1',
    xp: 38,
    problems: [
      {
        id: 1,
        problem: 'let length = 16   //??',
        description:
          'Use os comentario para descrever o tipo de dados criado nas seguinte variavel',
        correctWords: 'Number',
        randomWords: 'Stringer, Number, Caracter, 16, break, i++, <=, forEach',
        xp: 36,
        level: 'easy',
      },
      {
        id: 2,
        problem: '?? (i < 10) { i++ }',
        description:
          'Qual comando é usado para gerar um Loop enquanto uma condição não é completa, em javascript?',
        correctWords: 'while',
        randomWords: 'while, if, else, wrihe, loop, i++, <=',
        xp: 46,
        level: 'easy',
      },
      {
        id: 3,
        problem: 'let r = ??',
        description:
          'Use o método matemático correto para criar um número aleatório.',
        correctWords: 'Math.random()',
        randomWords:
          'Math.rand(), Math.random(), random(), misturar(), loop, i++, <=',
        xp: 46,
        level: 'easy',
      },
      {
        id: 4,
        problem:
          "const fruits = ['Banana', 'Laranja', 'Abacate'];          fruits.??",
        description:
          'Use o método Array correto para classificar a fruitsmatriz em ordem alfabética.',
        correctWords: 'sort()',
        randomWords:
          'aleatorio(), random(), sort(), sortear(), rand(), Math.random()',
        xp: 46,
        level: 'easy',
      },
    ],
  },
];
