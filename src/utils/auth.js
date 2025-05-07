import api from "../services/config";

const sendOtp = async (mobile, password) => {
  try {
    const response = await api.post("/auth/sign-in", { mobile, password });
    return {response};
  } catch (error) {
    return {error};
  }
};

const checkOtp = async (mobile, code) => {
  try {
    const response = await api.post("/auth/confirm", { mobile, code });
    return {response};
  } catch (error) {
    return {error};
  }
};

export { sendOtp, checkOtp };
