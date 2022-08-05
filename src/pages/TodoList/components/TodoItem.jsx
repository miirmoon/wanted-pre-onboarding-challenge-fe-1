import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TodoItem({ todo }) {
  const navigate = useNavigate();

  const onClickTodo = () => {
    navigate(`/${todo.id}`);
  };

  return <TodoLiseBox onClick={onClickTodo}>{todo.title}</TodoLiseBox>;
}

const TodoLiseBox = styled.li`
  padding: ${(props) => props.theme.boxSize.micro};
  margin: ${(props) => props.theme.boxSize.small} 0;
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.shadow.thin};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
`;
