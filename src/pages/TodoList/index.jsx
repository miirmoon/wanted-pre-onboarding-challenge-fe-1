import { useNavigate } from "react-router-dom";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";

import TodoForm from "./components/TodoForm";
import { useState } from "react";

export default function TodoList() {
  const navigate = useNavigate();

  const [isOpenForm, setIsOpenForm] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
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
      {isOpenForm && <TodoForm />}

      <Todos />
      <TodoDetail />

      <button onClick={logout}>로그아웃</button>
    </section>
  );
}
