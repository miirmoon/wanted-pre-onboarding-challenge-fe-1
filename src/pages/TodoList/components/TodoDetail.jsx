import { useNavigate } from "react-router-dom";
import { apiDeleteTodo } from "apis/todos";

import styled from "styled-components";
import theme from "styles/theme";
import { ColorButton } from "components/ButtonSet";

export default function TodoDetail({ todo, onDelete, onClickUpdate }) {
  const navigate = useNavigate();

  const deleteTodo = () => {
    apiDeleteTodo(todo.id).then(() => {
      onDelete();
      navigate("/");
    });
  };

  return (
    <DetailBox>
      <StyledTitle>{todo.title}</StyledTitle>
      <StyledContent>{todo.content}</StyledContent>

      <ButtonBox>
        <ColorButton color={theme.colors.yellow} onClick={onClickUpdate}>
          수정
        </ColorButton>
        <ColorButton color={theme.colors.red} onClick={deleteTodo}>
          삭제
        </ColorButton>
      </ButtonBox>
    </DetailBox>
  );
}

const DetailBox = styled.div`
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

const StyledTitle = styled.h3`
  margin: ${(props) => props.theme.boxSize.micro};
`;

const StyledContent = styled.div`
  padding: ${(props) => props.theme.boxSize.micro};
  margin: ${(props) => props.theme.boxSize.small} 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.white};
`;
