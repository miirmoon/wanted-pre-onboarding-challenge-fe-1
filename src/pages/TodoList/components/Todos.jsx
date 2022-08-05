import TodoItem from "./TodoItem";
import styled from "styled-components";

export default function Todos({ todoList }) {
  return (
    <TodosBox>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </TodosBox>
  );
}

const TodosBox = styled.div`
  overflow-y: auto;
  max-height: 50vh;
  padding: ${(props) => props.theme.boxSize.micro};
  margin: ${(props) => props.theme.boxSize.small} 0;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.grey01};
`;
