import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import theme from "styles/theme";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";
import Modal from "components/Modal";
import { ColorButton } from "components/ButtonSet";

import { apiGetTodoById, apiGetTodos } from "apis/todos";

export const FORM_FLAG = {
  CREATE: "할 일 추가",
  UPDATE: "할 일 수정",
};
Object.freeze(FORM_FLAG);

export default function TodoList() {
  const { todoId } = useParams();

  const [todoList, setTodoList] = useState([]);
  const [todoDetail, setTodoDetail] = useState(null);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [formFlag, setFormFlag] = useState(FORM_FLAG.CREATE);

  useEffect(() => {
    getTodoList();

    if (todoId) getTodoDetail();
    else setTodoDetail(null);
  }, [todoId]);

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
      <AlignRight>
        <ColorButton color={theme.colors.blue} onClick={openCreateForm}>
          할 일 추가
        </ColorButton>
      </AlignRight>
      {isOpenForm && (
        <Modal onClose={closeForm}>
          <TodoForm
            todo={todoDetail}
            flag={formFlag}
            onUpdate={onUpdate}
            onClose={closeForm}
          />
        </Modal>
      )}

      <Todos todoList={todoList} />
      {todoDetail && (
        <TodoDetail
          todo={todoDetail}
          onDelete={getTodoList}
          onClickUpdate={openUpdateForm}
        />
      )}
    </section>
  );
}

const AlignRight = styled.div`
  text-align: right;
`;
