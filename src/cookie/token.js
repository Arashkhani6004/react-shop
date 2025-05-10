const setToken = (token) => {
  document.cookie = `token=${token};max-age=${30 * 24 * 60 * 60}`;
};

const getToken = (token) => {
  const accessToken = document.cookie
    .split(";")
    .find((tokens) => tokens.trim().split("=")[0] === token)?.split("=")[1];
  return accessToken
};

export { setToken, getToken };
