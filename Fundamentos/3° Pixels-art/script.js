function limpDiv() {
  const divPixelBoard = document.querySelector('#pixel-board');
  divPixelBoard.innerHTML = '';
}

function createBoxDiv(value) {
  limpDiv();
  const tamanhaBloco = value;
  const base = tamanhaBloco * tamanhaBloco;
  for (let i = 0; i < base; i += 1) {
    const div = document.createElement('div');
    const divPai = document.querySelector('#pixel-board');

    divPai.style.height = `${(40 + 3) * tamanhaBloco}px`;
    divPai.style.width = `${(40 + 3) * tamanhaBloco}px`;
    div.display = 'inline-block';
    div.className = 'pixel';
    div.style.display = 'inline-block';

    divPai.appendChild(div);
  }
}

function createElementButton() {
  const btn = document.createElement('button');
  btn.id = 'clear-board';
  btn.innerText = 'Limpar';
  const localCreate = document.getElementById('localBotão');

  localCreate.appendChild(btn);
}

createElementButton();

function selectColor(event) {
  const elementoAlvo = event.target;
  if (elementoAlvo.id === 'color-palette') {
    const classSelect = 'selected';
    const divBlack = document.querySelector('#black');
    divBlack.className = `${divBlack.className} ${classSelect}`;
  } else {
    const classSelect = document.getElementsByClassName('selected');
    if (classSelect.length > 0) {
      classSelect[0].className = 'color';
    }
    elementoAlvo.className = `${elementoAlvo.className} selected`;
  }
}

function changeColor(event) {
  const corSelect = document.querySelector('.selected');
  const elementoAlvo = event.target;
  if (elementoAlvo.id === 'pixel-board') {
    elementoAlvo.style.backgroundColor = 'white';
  } else {
    elementoAlvo.style.backgroundColor = corSelect.id;
  }
}

function clearContent() {
  const classPixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < classPixels.length; i += 1) {
    classPixels[i].style.backgroundColor = 'white';
  }
}

function testeNumber(value) {
  let imput = value;
  if (value === '') {
    alert('Board inválido!');
    imput = 5;
  } else if (value > 50) {
    imput = 50;
  } else if (value < 5) {
    imput = 5;
  }
  return imput;
}

function activeButton() {
  const valueInput = document.getElementById('board-size').value;
  createBoxDiv(testeNumber(valueInput));
}

// Meu codigo abaixo foi construido tendo como base o codigo da primeria respota do site: https://stackoverflow.com/questions/1484506/random-color-generator

function generateColorRandom() {
  let color = '#';
  const letras = '0123456789ABCDEF';
  for (let i = 0; i < 6; i += 1) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createDivColors() {
  const divColors = document.getElementsByClassName('color');

  for (let i = 1; i < divColors.length; i += 1) {
    divColors[i].id = generateColorRandom();
    divColors[i].style.backgroundColor = divColors[i].id;
  }
}

window.onload = function carregada() {
  const classSelect = 'selected';
  const divBlack = document.querySelector('#black');
  divBlack.className = `${divBlack.className} ${classSelect}`;

  const divColorPallet = document.getElementById('color-palette');
  const divPixelBoard = document.getElementById('pixel-board');

  divPixelBoard.addEventListener('click', changeColor);
  divColorPallet.addEventListener('click', selectColor);
  const btnClaer = document.getElementById('clear-board');
  btnClaer.addEventListener('click', clearContent);

  const btnOk = document.getElementById('generate-board');
  btnOk.addEventListener('click', activeButton);

  createBoxDiv(5);
  generateColorRandom();
  createDivColors();
};
