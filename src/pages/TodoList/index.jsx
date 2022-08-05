import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";

import { apiGetTodoById, apiGetTodos } from "apis/todos";

export const FORM_FLAG = {
  CREATE: "create",
  UPDATE: "update",
};
Object.freeze(FORM_FLAG);

export default function TodoList() {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [todoDetail, setTodoDetail] = useState(null);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [formFlag, setFormFlag] = useState(FORM_FLAG.CREATE);

  useEffect(() => {
    getTodoList();

    if (todoId) getTodoDetail();
    else setTodoDetail(null);
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

  const onUpdate = () => {
    getTodoList();
    getTodoDetail();
  };

  const openCreateForm = () => {
    setFormFlag(FORM_FLAG.CREATE);
    setIsOpenForm(true);
  };

  const openUpdateForm = () => {
    setFormFlag(FORM_FLAG.UPDATE);
    setIsOpenForm(true);
  };

  const closeForm = () => {
    setIsOpenForm(false);
  };

  return (
    <section>
      <button onClick={openCreateForm}>추가</button>
      {isOpenForm && (
        <TodoForm
          todo={todoDetail}
          flag={formFlag}
          onUpdate={onUpdate}
          onClose={closeForm}
        />
      )}

      <Todos todoList={todoList} />
      <TodoDetail
        todo={todoDetail}
        onDelete={getTodoList}
        onClickUpdate={openUpdateForm}
      />

      <button onClick={logout}>로그아웃</button>
    </section>
  );
}
