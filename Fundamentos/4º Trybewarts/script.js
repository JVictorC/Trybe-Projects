//  Realiza autenticação de login
function verifyLogin() {
  const login = document.getElementsByName('login')[0].value;
  const password = document.getElementsByName('password')[0].value;
  const validCredentials = { login: 'tryber@teste.com', password: '123456' };

  const credentialsValidated = [false, false];

  //  Valida o login e mostra a validação em seguida
  if (login === validCredentials.login) {
    credentialsValidated[0] = true;
  }
  if (password === validCredentials.password) {
    credentialsValidated[1] = true;
  }
  if (credentialsValidated[0] && credentialsValidated[1]) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const btnLogar = document.querySelector('#btn-login');
const textArea = document.querySelector('#textarea');
const object = document.getElementById('agreement');
const counter = document.querySelector('#counter');
const evaluationForm = document.getElementById('evaluation-form');

btnLogar.addEventListener('click', verifyLogin);

function validationComentario(event) {
  const elementoAlvo = event.target;
  const text = elementoAlvo.value;
  const larguraText = text.length;
  counter.innerText = 500 - larguraText;
  if (larguraText >= 500) {
    elementoAlvo.blur();
    document.getElementById('textarea').readOnly = true;
  }
}

textArea.addEventListener('keyup', validationComentario);

function desligarButton() {
  const statusButton = document.querySelector('#submit-btn');
  const checked = [object.checked];
  if (checked[0] === false) {
    statusButton.disabled = true;
  } else {
    statusButton.disabled = false;
  }
}

// Buttons Para 22

function submitName() {
  const lastName = document.getElementById('input-lastname').value;
  const name = document.getElementById('input-name').value;
  const p = document.createElement('p');
  p.innerText = `Nome: ${name} ${lastName}`;
  evaluationForm.appendChild(p);
}

function submitEmail() {
  const divPai = evaluationForm;
  const email = document.getElementById('input-email').value;
  const p = document.createElement('p');
  p.innerText = `Email: ${email}`;
  divPai.appendChild(p);
}

function submitHouse() {
  const divPai = evaluationForm;
  const house = document.getElementById('house').value;
  const p = document.createElement('p');
  p.innerText = `Casa: ${house}`;
  divPai.appendChild(p);
}

function switchFamily(value) {
  let input;
  switch (value) {
  case 0: input = 'Frontend';
    break;
  case 1: input = 'Backend';
    break;
  default: input = 'FullStack';
    break;
  }
  return input;
}

function valueFamily() {
  const front = document.getElementById('front');
  const back = document.getElementById('back');
  const full = document.getElementById('full');
  let value;
  const statusRadio = [front.checked, back.checked, full.checked];
  for (let i = 0; i < statusRadio.length; i += 1) {
    if (statusRadio[i] === true) {
      value = switchFamily(i);
    }
  }
  return value;
}

function submitFamily() {
  const divPai = evaluationForm;
  const family = valueFamily();
  const p = document.createElement('p');
  p.innerText = `Família: ${family}`;
  divPai.appendChild(p);
}

function checksBoxSelects() {
  const checkBox = document.getElementsByClassName('subject');
  const select = [];
  for (let i = 0; i < checkBox.length; i += 1) {
    if (checkBox[i].checked === true) {
      select.push(checkBox[i].value);
      select.push(', ');
    }
  }
  select.pop();
  return select.join('');
}

function submitchecksBox() {
  const divPai = evaluationForm;
  const checkBox = checksBoxSelects();
  const p = document.createElement('p');
  p.innerText = `Matérias: ${checkBox}`;
  divPai.appendChild(p);
}

function valueAvaliaçao() {
  const avaliation = document.getElementsByClassName('avaliation');
  let value;
  for (let i = 0; i < avaliation.length; i += 1) {
    if (avaliation[i].checked === true) {
      value = avaliation[i].value;
      break;
    }
  }
  return value;
}

function submitAvaliacao() {
  const divPai = evaluationForm;
  const checkBox = valueAvaliaçao();
  const p = document.createElement('p');
  p.innerText = `Avaliação: ${checkBox}`;
  divPai.appendChild(p);
}

function submitTextArea() {
  const divPai = evaluationForm;
  const areaText = document.getElementById('textarea').value;
  const p = document.createElement('p');
  p.innerText = `Observações: ${areaText}`;
  divPai.appendChild(p);
}

function submitInfos(event) {
  event.preventDefault();

  submitName();
  submitEmail();
  submitHouse();
  submitFamily();
  submitchecksBox();
  submitAvaliacao();
  submitTextArea();
}

object.addEventListener('click', desligarButton);

window.onload = function windowOnload() {
  desligarButton();
  const btnSub = document.querySelector('#submit-btn');

  btnSub.addEventListener('click', submitInfos);
};
