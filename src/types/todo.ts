export interface Todo {
  title: string;
  content: string;
  id: string;
  createAt: string;
  updateAt: string;
}

export interface TodoParams {
  id: string;
}

export interface CreateTodoParams {
  title: string;
  content: string;
}

export interface UpdateTodoParams extends CreateTodoParams {
  id: string;
}
