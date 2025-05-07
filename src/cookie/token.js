const setToken = (token) => {
  document.cookie = `token=${token};max-age=${30 * 24 * 60 * 60}`;
};

export { setToken };
