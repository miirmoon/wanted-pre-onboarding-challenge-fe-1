import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styled from "styled-components";
import theme from "styles/theme";

import Todos from "./components/Todos";
import TodoDetail from "./components/TodoDetail";
import TodoForm from "./components/TodoForm";
import Modal from "components/Modal";
import { BasicButton, ColorButton } from "components/ButtonSet";

import { apiGetTodoById, apiGetTodos } from "apis/todos";
import { Todo } from "types/todo";

export const FORM_FLAG = {
  CREATE: "할 일 추가",
  UPDATE: "할 일 수정",
};
Object.freeze(FORM_FLAG);

export default function TodoList() {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const [todoList, setTodoList] = useState([]);
  const [todoDetail, setTodoDetail] = useState<Todo | null>(null);

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [formFlag, setFormFlag] = useState(FORM_FLAG.CREATE);

  useEffect(() => {
    getTodoList();

    if (todoId) getTodoDetail();
    else setTodoDetail(null);
  }, [todoId]);

  const getTodoList = () => {
    apiGetTodos()
      .then((data) => {
        setTodoList(data.data);
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  const getTodoDetail = () => {
    if (todoId) {
      apiGetTodoById({ id: todoId })
        .then((data) => {
          setTodoDetail(data.data);
        })
        .catch((err) => {
          alert(err.response.data.details);
        });
    }
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

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <section>
      <ButtonBox>
        <BasicButton color={theme.colors.grey15} onClick={logout}>
          로그아웃
        </BasicButton>
        <ColorButton color={theme.colors.blue} onClick={openCreateForm}>
          할 일 추가
        </ColorButton>
      </ButtonBox>
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

      <Todos todos={todoList} />
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

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
