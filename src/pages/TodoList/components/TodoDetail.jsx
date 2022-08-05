import { useNavigate } from "react-router-dom";
import { apiDeleteTodo } from "apis/todos";

export default function TodoDetail({ todo, onDelete, onClickUpdate }) {
  const navigate = useNavigate();

  const deleteTodo = () => {
    apiDeleteTodo(todo.id).then(() => {
      onDelete();
      navigate("/");
    });
  };

  return (
    <section>
      {todo && (
        <>
          <div>{todo.title}</div>
          <div>{todo.content}</div>

          <button onClick={onClickUpdate}>수정</button>
          <button onClick={deleteTodo}>삭제</button>
        </>
      )}
    </section>
  );
}
