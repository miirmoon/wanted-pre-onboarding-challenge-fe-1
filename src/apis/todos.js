import { authApiAxios } from "apis";

export const apiCreateTodo = async (title, content) => {
  return (await authApiAxios.post(`/todos`, { title, content })).data;
};
