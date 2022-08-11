import { authApiAxios } from "apis";
import { TodoParams, CreateTodoParams, UpdateTodoParams } from "types/todo";

export const apiGetTodos = async () => {
  return (await authApiAxios.get(`/todos`)).data;
};

export const apiGetTodoById = async ({ id }: TodoParams) => {
  return (await authApiAxios.get(`/todos/${id}`)).data;
};

export const apiCreateTodo = async ({ title, content }: CreateTodoParams) => {
  return (await authApiAxios.post(`/todos`, { title, content })).data;
};

export const apiUpdateTodo = async ({
  id,
  title,
  content,
}: UpdateTodoParams) => {
  return (await authApiAxios.put(`/todos/${id}`, { title, content })).data;
};

export const apiDeleteTodo = async ({ id }: TodoParams) => {
  return (await authApiAxios.delete(`/todos/${id}`)).data;
};
