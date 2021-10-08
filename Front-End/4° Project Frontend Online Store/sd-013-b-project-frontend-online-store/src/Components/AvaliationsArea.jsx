import React from 'react';
import FormProduct from './FormProduct';
import Avaliate from './Avaliate';

export default class AvaliationsArea extends React.Component {
  constructor() {
    super();
    this.state = {
      updated: false,
      avaliations: [],
    };
  }

  avaliateProduct = (rate, email, text) => {
    this.setState((prevState) => ({
      updated: true,
      avaliations: [...prevState.avaliations, { rate, email, text }],
    }));
  };

  render() {
    const { avaliations, updated } = this.state;
    return (
      <div>
        <FormProduct avaliateProduct={ this.avaliateProduct } />
        <Avaliate avaliations={ avaliations } updated={ updated } />
      </div>
    );
  }
}
