import React from 'react';

export default function Cabeçalho() {
  return (
    <tr className="conteiner-table-header">
      <th>Descrição</th>
      <th>Tag</th>
      <th>Método de pagamento</th>
      <th>Valor</th>
      <th>Moeda</th>
      <th>Câmbio utilizado</th>
      <th>Valor convertido</th>
      <th>Moeda de conversão</th>
      <th>Editar/Excluir</th>
    </tr>
  );
}
