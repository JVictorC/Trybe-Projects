import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaCreditCard, FaBarcode } from 'react-icons/fa';
import '../Style/Checkout Style/Checkout.css';
import PaymentMethodsRadio from './PaymentMethodsRadio';
import Footer from './Footer';

const states = [
  { short: 'AC', long: 'Acre' },
  { short: 'AL', long: 'Alagoas' },
  { short: 'AP', long: 'Amapá' },
  { short: 'AM', long: 'Amazonas' },
  { short: 'BA', long: 'Bahia' },
  { short: 'CE', long: 'Ceará' },
  { short: 'DF', long: 'Distrito Federal' },
  { short: 'ES', long: 'Espírito Santo' },
  { short: 'GO', long: 'Goiás' },
  { short: 'MA', long: 'Maranhão' },
  { short: 'MT', long: 'Mato Grosso' },
  { short: 'MS', long: 'Mato Grosso do Sul' },
  { short: 'MG', long: 'Minas Gerais' },
  { short: 'PA', long: 'Pará' },
  { short: 'PB', long: 'Paraíba' },
  { short: 'PR', long: 'Paraná' },
  { short: 'PE', long: 'Pernambuco' },
  { short: 'PI', long: 'Piauí' },
  { short: 'RJ', long: 'Rio de Janeiro' },
  { short: 'RN', long: 'Rio Grande do Norte' },
  { short: 'RS', long: 'Rio Grande do Sul' },
  { short: 'RO', long: 'Rondônia' },
  { short: 'RR', long: 'Roraima' },
  { short: 'SC', long: 'Santa Catarina' },
  { short: 'SP', long: 'São Paulo' },
  { short: 'SE', long: 'Sergipe' },
  { short: 'TO', long: 'Tocantins' },
];

class Checkout extends Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('card'));
    return (
      <div className="checkout">
        <header className="header-checkout">
          <Link to="/">
            <AiOutlineHome className="fs-1 text-success" />
          </Link>
        </header>
        <main className="container-checkout">
          <section className="content-checkout">
            <h2
              className="display-4 text-center my-3 text-success"
            >
              Revise seus Produtos
            </h2>
            <ol className="d-flex flex-wrap justify-content-center">
              {cartItems.map((item) => (
                <li key={ item.id } className="product-checkout">
                  <p className="lead fs-3">{item.title}</p>
                  <img src={ item.thumbnail } alt="produto" className="img-thumbnail" />
                  <h3 className="text-success py-5">
                    <strong>{`R$: ${item.price}`}</strong>
                  </h3>
                </li>
              ))}
            </ol>
            <h2 className="display-4 text-success">
              Total a pagar:
              {` R$ ${cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}`}
            </h2>
          </section>
          <section className="form-checkout">
            <h2 className="display-4 text-success m-3">Informações do Comprador</h2>
            <input
              className="m-2 form-control"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="fullName"
              type="text"
            />
            <input
              className="form-control"
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="CPF"
              type="text"
            />
            <input
              className="m-2 form-control"
              data-testid="checkout-email"
              placeholder="Email"
              name="email"
              type="email"
            />
            <input
              className="m-2 form-control"
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="phone"
              type="text"
            />
            <input
              className="m-2 form-control"
              data-testid="checkout-cep"
              placeholder="CEP"
              name="postalCode"
              type="text"
            />
            <input
              className="m-2 form-control"
              data-testid="checkout-address"
              placeholder="Endereço"
              name="address"
              type="text"
            />
            <input
              className="m-2 form-control"
              placeholder="Complemento"
              name="complement"
              type="text"
            />
            <input
              className="m-2 form-control"
              placeholder="Número"
              name="number"
              type="text"
            />
            <input
              className="m-2 form-control"
              data-testid=""
              placeholder="Cidade"
              name="city"
              type="text"
            />
            <select placeholder="Estado" name="state" className="form-select">
              <option value="" selected> Estado </option>
              {states.map((state, index) => (
                <option key={ index } value={ state.short }>
                  {state.long}
                </option>
              ))}
            </select>
          </section>
          <section className="form-checkout form-check">
            <h2 className="display-4 text-success m-3">Métodos de Pagamento:</h2>
            <PaymentMethodsRadio id="boleto" name="payment" title="Boleto">
              <FaBarcode />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio
              id="mastercard"
              name="payment"
              title="mastercard"
            >
              <FaCreditCard />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio id="visa" name="payment" title="visa">
              <FaCreditCard />
            </PaymentMethodsRadio>

            <PaymentMethodsRadio id="elo" name="payment" title="elo">
              <FaCreditCard />
            </PaymentMethodsRadio>
          </section>
          <button
            type="button"
            className="btn btn-outline-success button-buy"
          >
            Comprar

          </button>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Checkout;
