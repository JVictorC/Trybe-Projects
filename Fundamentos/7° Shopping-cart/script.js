const appendChild = (element, classDivParent) => {
  const e = document.querySelector(`.${classDivParent}`);
  e.appendChild(element);
};

const deleteSalveLocal = (id) => {
  localStorage.removeItem(id);
};

const saveValor = (value) => {
  localStorage.setItem('total', value);
};

const sumPrices = (prices) => {
  const value = document.querySelector('.price');
  value.innerText = parseFloat(parseFloat(value.innerText) + parseFloat(prices));
};

const salvedLocal = ({ id: sku, title: name, price: salePrice }) => {
  const dateForSalve = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  localStorage.setItem(sku, dateForSalve);
  sumPrices(salePrice);
  const total = document.querySelector('.total-price').innerText;
  localStorage.setItem('total', total);
};

const subtraiPrices = (price) => {
  const value = document.querySelector('.price');
  value.innerText = ((parseFloat(parseFloat(value.innerText) - parseFloat(price)) < 0)
    ? 0 : parseFloat(parseFloat(value.innerText) - parseFloat(price)));
  saveValor(value.innerText);
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  const elementTarget = event.target;
  const list = elementTarget.innerText.split('|')[2];
  subtraiPrices(list.split('$')[1]);
  deleteSalveLocal(elementTarget.id);
  elementTarget.remove();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = sku;
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const fetchSelectItem = (id) => new Promise((resolve, reject) => {
  fetch(`https://api.mercadolibre.com/items/${id}`)
    .then((response) => response.json())
    .then((objc) => resolve(objc))
    .catch(() => {
      reject();
    });
});

const takeIdName = (event) => {
  const elementPrevius = event.target.parentElement;
  const id = elementPrevius.querySelector('.item__sku').innerText;
  // while (elementPrevius.className !== 'item__sku') {
  //   elementPrevius = elementPrevius.previousSibling;
  // }
  fetchSelectItem(id)
    .then((obj) => {
      const objc = createCartItemElement(obj);
      appendChild(objc, 'cart__items');
      salvedLocal(obj);
    });
};

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add',
    'Adicionar ao carrinho!')).addEventListener('click', takeIdName);

  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

const removeItem = (classItem) => {
  const e = document.querySelector(`.${classItem}`);
  e.remove();
};

const fetchIp = async () => new Promise((resolve, reject) => {
  fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
    .then((response) => response.json())
    .then((objc) => {
      removeItem('loading');
      resolve(objc);
    }).catch(() => {
      reject();
    });
});

const createElementInHtml = async () => {
  await fetchIp()
    .then((objc) => {
      objc.results.forEach((obj) => {
        appendChild(createProductItemElement(obj), 'items');
      });
    });
};

const reloadWindow = (text, key) => {
  const sectionCar = document.querySelector('.cart__items');
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.id = key;
  li.innerText = text;
  li.addEventListener('click', cartItemClickListener);// cartItemClickListener função para remover ?;
  sectionCar.appendChild(li);
};

const onloadWindowsCart = () => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    if (key !== 'total') reloadWindow(localStorage.getItem(key), key);
  });
  const total = document.querySelector('.total-price');
  total.innerText = (localStorage.getItem('total') === null 
  || localStorage.getItem('total') === 0)
    ? 0 : localStorage.getItem('total');
};

window.onload = async () => {
  createElementInHtml();
  onloadWindowsCart();
  document.querySelector('.empty-cart').addEventListener('click', () => {
    const ol = document.querySelector('.cart__items');
    while (ol.childNodes.length > 0) {
      ol.childNodes[0].remove();
      localStorage.clear();
      document.querySelector('.price').innerText = 0;
    }
  });
};
