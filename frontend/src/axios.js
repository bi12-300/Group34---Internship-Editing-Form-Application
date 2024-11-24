import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/auth", // API backend
});

export default instance;

export const loginAPI = async (username, password) => {
  try {
    const response = await instance.post("/login", { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerAPI = async (username, password, role) => {
  try {
    const response = await instance.post("/register", { username, password, role });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
