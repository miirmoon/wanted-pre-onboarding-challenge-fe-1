import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-width: ${(props) => props.theme.mediaSize.minMobile};
  max-width: ${(props) => props.theme.mediaSize.mobile};
  min-height: 100vh;
  margin: auto;
  padding: ${(props) => props.theme.boxSize.normal};
`;
