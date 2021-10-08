// Codigo inspirado no https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;

  return re.test(String(email).toLowerCase());
}

export default validateEmail;
