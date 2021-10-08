const total = (expenses) => expenses.reduce((acc, { currency, value, exchangeRates }) => {
  const cotação = exchangeRates[currency].ask;
  acc += value * cotação;
  return acc;
}, 0);

export default total;
