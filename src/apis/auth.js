import { apiAxios } from "apis";

export const apiLogin = async (email, password) => {
  return (await apiAxios.post(`/users/login`, { email, password })).data;
};

export const apiSignUp = async (email, password) => {
  return (await apiAxios.post(`/users/create`, { email, password })).data;
};
