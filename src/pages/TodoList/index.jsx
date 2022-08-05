import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";

import { apiGetTodos } from "apis/todos";

export default function TodoList() {
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    getTodoList();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const getTodoList = () => {
    apiGetTodos().then((data) => {
      setTodoList(data.data);
    });
  };

  const openFormModal = () => {
    setIsOpenForm(true);
  };

  const closeFormModal = () => {
    setIsOpenForm(false);
  };

  return (
    <section>
      <button onClick={openFormModal}>추가</button>
      {isOpenForm && <TodoForm onCreate={getTodoList} />}

      <Todos todoList={todoList} />
      <TodoDetail />

      <button onClick={logout}>로그아웃</button>
    </section>
  );
}
