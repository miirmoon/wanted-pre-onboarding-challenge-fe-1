import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const isAuthorized = localStorage.getItem("token");

  if (!isAuthorized) {
    alert("서비스 이용을 위해서는 로그인이 필요해요!!");
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
}
