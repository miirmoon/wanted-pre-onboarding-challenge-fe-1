import styled from "styled-components";
import theme from "styles/theme";
import { BasicButton } from "components/ButtonSet";

export default function MainHeader() {
  return (
    <HeaderBox>
      <h1>TodoList</h1>
    </HeaderBox>
  );
}

const HeaderBox = styled.header`
  margin: ${(props) => props.theme.boxSize.normal};
  text-align: center;
`;
