import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import theme from "styles/theme";
import { BasicButton } from "components/ButtonSet";

export default function MainHeader() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <HeaderBox>
      <h1>TodoList</h1>
      <BasicButton color={theme.colors.grey15} onClick={logout}>
        로그아웃
      </BasicButton>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  margin: ${(props) => props.theme.boxSize.normal};
  text-align: center;
`;
