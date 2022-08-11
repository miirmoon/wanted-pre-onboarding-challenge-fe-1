import TodoItem from "./TodoItem";
import styled from "styled-components";
import { Todo } from "types/todo";

type TodosProps = {
  todos: Todo[];
};

export default function Todos({ todos }: TodosProps) {
  return (
    <TodosBox>
      <ul>
        {todos.map((todo) => (
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
