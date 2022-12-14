import { useNavigate } from "react-router-dom";
import { apiDeleteTodo } from "apis/todos";

import styled from "styled-components";
import theme from "styles/theme";
import { ColorButton } from "components/ButtonSet";
import { Todo } from "types/todo";
import { AxiosError } from "axios";

type TodoDetailProps = {
  todo: Todo | null;
  onDelete: () => void;
  onClickUpdate: () => void;
};

export default function TodoDetail({
  todo,
  onDelete,
  onClickUpdate,
}: TodoDetailProps) {
  const navigate = useNavigate();

  const deleteTodo = () => {
    if (todo) {
      apiDeleteTodo({ id: todo.id })
        .then(() => {
          onDelete();
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.details);
        });
    }
  };

  return (
    <TodoDetailBox>
      {todo && (
        <>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoContent>{todo.content}</TodoContent>

          <ButtonBox>
            <ColorButton color={theme.colors.yellow} onClick={onClickUpdate}>
              수정
            </ColorButton>
            <ColorButton color={theme.colors.red} onClick={deleteTodo}>
              삭제
            </ColorButton>
          </ButtonBox>
        </>
      )}
    </TodoDetailBox>
  );
}

const TodoDetailBox = styled.div`
  padding: ${(props) => props.theme.boxSize.micro};
  margin: ${(props) => props.theme.boxSize.small} 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.grey01};
  text-align: left;
`;

const ButtonBox = styled.div`
  text-align: right;

  ${ColorButton} {
    margin-left: 5px;
  }
`;

const TodoTitle = styled.h3`
  margin: ${(props) => props.theme.boxSize.micro};
`;

const TodoContent = styled.div`
  padding: ${(props) => props.theme.boxSize.micro};
  margin: ${(props) => props.theme.boxSize.small} 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;
