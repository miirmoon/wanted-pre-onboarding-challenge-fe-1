import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";

import { apiGetTodoById, apiGetTodos } from "apis/todos";

export default function TodoList() {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [todoDetail, setTodoDetail] = useState(null);

  const [isOpenForm, setIsOpenForm] = useState(false);

  useEffect(() => {
    getTodoList();
  }, []);

  useEffect(() => {
    if (todoId) {
      getTodoDetail();
    }
  }, [todoId]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const getTodoList = () => {
    apiGetTodos().then((data) => {
      setTodoList(data.data);
    });
  };

  const getTodoDetail = () => {
    apiGetTodoById(todoId).then((data) => {
      setTodoDetail(data.data);
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
      <TodoDetail todo={todoDetail} />

      <button onClick={logout}>로그아웃</button>
    </section>
  );
}
