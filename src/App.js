import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyles";

import MainHeader from "components/layout/MainHeader";
import { Container } from "components/layout/Container";
import TodoList from "pages/TodoList";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

import RequireAuth from "utils/RequireAuth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <MainHeader />
          <Routes>
            <Route element={<RequireAuth />}>
              <Route path="/" element={<TodoList />} />
              <Route path="/:todoId" element={<TodoList />} />
            </Route>
            <Route path="/auth" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
