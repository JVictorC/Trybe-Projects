// Desafio 1
function compareTrue(valor1, valor2) {
  let bool = false;
  if (valor1 === true && valor2 === true) {
    bool = true;
  } else {
    bool = false;
  }
  return bool;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(list) {
  let palavra = `${list[list.length - 1]}, ${list[0]}`;
  // for (let i = 0; i < list.length; i += 1) {
  //   if (i === list.length - 1) {
  //     palavra += list[i]
  //   }
  // }

  // palavra += ', '

  // palavra += list[0];

  return palavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  wins *= 3;
  ties *= 1;
  pontos += wins;
  pontos += ties;
  return pontos;
}

// Desafio 6

function highestCount(list) {
  let maioNumber = Math.max(...list);
  let contador = 0;
  for (let i = 0; i < list.length; i += 1) {
    if (maioNumber === list[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  let respota = null;

  if (distanciaCat1 === distanciaCat2) {
    respota = 'os gatos trombam e o rato foge';
  } else if (distanciaCat1 < distanciaCat2) {
    respota = 'cat1';
  } else {
    respota = 'cat2';
  }
  return respota;
}

// Desafio 8

function testeLogico(list) {
  let text = '';
  if ((list % 3) === 0 && (list % 5) === 0) {
    text = 'fizzBuzz';
  } else if ((list % 3) === 0) {
    text = 'fizz';
  } else if ((list % 5) === 0) {
    text = 'buzz';
  } else {
    text = 'bug!';
  }
  return text;
}

function fizzBuzz(list) {
  let textFizzBuzz;
  textFizzBuzz = [];
  for (let i = 0; i < list.length; i += 1) {
    textFizzBuzz.push(testeLogico(list[i]));
  }
  return textFizzBuzz;
}

// Desafio 9

function igualNumberEnconde(letra, numero, vogal) {
  if (letra === vogal) {
    letra = numero;
  }
  return letra;
}

function encode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  let palavraLista = string.split('');

  for (let i = 0; i < palavraLista.length; i += 1) {
    for (let index = 0; index < palavraLista.length; index += 1) {
      palavraLista[i] = igualNumberEnconde(palavraLista[i], numeros[index], vogais[index]);
    }
  }
  return palavraLista.join('');
}

function igualNumberDecode(letra, numero, vogal) {
  if (parseInt(letra, 10) === numero) {
    letra = vogal;
  }
  return letra;
}

function decode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeros = [1, 2, 3, 4, 5];
  let palavraLista = string.split('');

  for (let i = 0; i < palavraLista.length; i += 1) {
    for (let index = 0; index < palavraLista.length; index += 1) {
      palavraLista[i] = igualNumberDecode(palavraLista[i], numeros[index], vogais[index]);
    }
  }
  return palavraLista.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
