import { authApiAxios } from "apis";

export const apiGetTodos = async () => {
  return (await authApiAxios.get(`/todos`)).data;
};

export const apiGetTodoById = async (id) => {
  return (await authApiAxios.get(`/todos/${id}`)).data;
};

export const apiCreateTodo = async (title, content) => {
  return (await authApiAxios.post(`/todos`, { title, content })).data;
};

};
