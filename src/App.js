import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "pages/TodoList";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import RequireAuth from "utils/RequireAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<TodoList />} />
        </Route>
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
