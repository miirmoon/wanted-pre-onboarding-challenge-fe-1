import { useNavigate } from "react-router-dom";

export default function TodoItem({ todo }) {
  const navigate = useNavigate();

  const onClickTodo = () => {
    navigate(`/${todo.id}`);
  };

  return <li onClick={onClickTodo}>{todo.title}</li>;
}
