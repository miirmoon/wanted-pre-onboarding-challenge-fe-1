import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <section>
      투두리스트
      <button onClick={logout}>로그아웃</button>
    </section>
  );
}
