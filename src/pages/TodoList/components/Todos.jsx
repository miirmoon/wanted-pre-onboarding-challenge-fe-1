import TodoItem from "./TodoItem";

export default function Todos({ todoList }) {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}
