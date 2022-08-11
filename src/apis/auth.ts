import { apiAxios } from "apis";
import { Auth } from "types/auth";

export const apiLogin = async ({ email, password }: Auth) => {
  return (await apiAxios.post(`/users/login`, { email, password })).data;
};

export const apiSignUp = async ({ email, password }: Auth) => {
  return (await apiAxios.post(`/users/create`, { email, password })).data;
};
