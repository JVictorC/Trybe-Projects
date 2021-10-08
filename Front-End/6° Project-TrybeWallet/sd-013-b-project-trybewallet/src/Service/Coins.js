export const requestCoins = () => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((response) => response.json())
  .then((coins) => coins);

export const filterCoins = async () => {
  const reponse = await requestCoins();
  const Keys = Object.keys(reponse);
  const coins = Keys
    .map((key) => ({ key, ...reponse[key] }))
    .filter((coin) => coin.key !== 'USDT');
  return coins;
};
