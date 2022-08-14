import { apiAxios } from "apis";
import { TodoParams, CreateTodoParams, UpdateTodoParams } from "types/todo";

export const apiGetTodos = async () => {
  return (await apiAxios.get(`/todos`)).data;
};

export const apiGetTodoById = async ({ id }: TodoParams) => {
  return (await apiAxios.get(`/todos/${id}`)).data;
};

export const apiCreateTodo = async ({ title, content }: CreateTodoParams) => {
  return (await apiAxios.post(`/todos`, { title, content })).data;
};

export const apiUpdateTodo = async ({
  id,
  title,
  content,
}: UpdateTodoParams) => {
  return (await apiAxios.put(`/todos/${id}`, { title, content })).data;
};

export const apiDeleteTodo = async ({ id }: TodoParams) => {
  return (await apiAxios.delete(`/todos/${id}`)).data;
};
