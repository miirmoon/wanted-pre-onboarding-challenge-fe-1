import styled from "styled-components";

export const BasicInput = styled.input`
  width: 100%;
  padding: 7px;
  border: 1px solid ${(props) => props.theme.colors.grey05};
  border-radius: 5px;
`;

export const BasicTextArea = styled.textarea`
  width: 100%;
  height: 50%;
  padding: 7px;
  border: 1px solid ${(props) => props.theme.colors.grey05};
  border-radius: 5px;
  resize: none;
`;
