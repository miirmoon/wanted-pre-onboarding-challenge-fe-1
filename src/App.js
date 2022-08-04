import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
