const validateEmail = (email) => {
  const regex =
    /^[0-9a-z]([-_.]?[0-9a-z])*@[0-9a-z]([-_.]?[0-9a-z])*\.[a-z]{2,3}$/i;
  return regex.test(email);
};

const validatePw = (pw) => {
  const MAX_LENGTH = 8;
  return pw.length >= MAX_LENGTH;
};

export { validateEmail, validatePw };
