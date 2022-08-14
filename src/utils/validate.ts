const validateEmail = (email: string) => {
  const emailReg =
    /^[0-9a-z]([-_.]?[0-9a-z])*@[0-9a-z]([-_.]?[0-9a-z])*\.[a-z]{2,3}$/i;
  return emailReg.test(email);
};

const validatePassword = (password: string) => {
  const MAX_LENGTH = 8;
  return password.length >= MAX_LENGTH;
};

export { validateEmail, validatePassword };
