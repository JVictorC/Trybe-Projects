// Desafio 10

function techList(list, nam) {
  let ordemLista = list.sort();
  let lista = [];
  if (list.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < list.length; i += 1) {
    lista.push({
      tech: ordemLista[i],

      name: nam,
    });
  }
  return lista;
}

function minMax(list, number) {
  let numberMax = Math.max(...list);
  let numberMin = Math.min(...list);
  let resposta = number;

  if (list.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (numberMax > 9 || numberMin < 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  return resposta;
}

function incrementoContador(list, secondList) {
  let incremento = 0;
  if (list === secondList) {
    incremento += 1;
  } else {
    incremento = 0;
  }
  return incremento;
}

function tamanhoContado(contador, respota) {
  let imput = respota;
  let erro = 'não é possível gerar um número de telefone com esses valores';
  if (respota === erro) {
    imput = erro;
  } else if (contador >= 3) {
    imput = erro;
  } else {
    imput = respota;
  }
  return imput;
}

function repeat(list, number) {
  let contador = 0;
  let respota = number;

  for (let i = 0; i < list.length; i += 1) {
    for (let index = 0; index < list.length; index += 1) {
      contador += incrementoContador(list[i], list[index]);
    }
    respota = tamanhoContado(contador, respota);
    contador = 0;
  }
  return respota;
}

function testeNumerosTelefones(list, number) {
  if (minMax(list, number) !== number) {
    return minMax(list, number);
  }
  if (repeat(list, number) !== number) {
    return repeat(list, number);
  }
  return number;
}

function generatePhoneNumber(list) {
  let number = '';
  let number1 = `(${list[0]}${list[1]})`;
  let number2 = ` ${list[2]}${list[3]}${list[4]}${list[5]}${list[6]}`;
  let number3 = `-${list[7]}${list[8]}${list[9]}${list[10]}`;
  number = `${number1}${number2}${number3}`;

  return testeNumerosTelefones(list, number);
}

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  let teste = false;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    teste = true;
  } else {
    teste = false;
  }
  return teste;
}

// Desafio 13
function transformsInIntenger(list) {
  let lista = [];
  for (let i = 0; i < list.length; i += 1) {
    lista.push(parseInt(list[i], 10));
  }
  return lista;
}
function hydrate(text) {
  let r = /\d+/g;
  let numberInText = text.match(r);
  let string = 'copos de água';
  let lista = [];
  let sumDrinks = null;
  lista = transformsInIntenger(numberInText);
  let imput = '';
  for (let i = 0; i < lista.length; i += 1) {
    sumDrinks += lista[i];
  }
  if (sumDrinks === 1) {
    imput = `${sumDrinks} copo de água`;
  } else {
    imput = `${sumDrinks} ${string}`;
  }
  return imput;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
