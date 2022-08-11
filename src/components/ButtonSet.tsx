import styled from "styled-components";

export const BasicButton = styled.button`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  &:hover {
    text-decoration: underline;
    text-decoration=color: ${(props) => props.color};
  }
`;

export const ColorButton = styled.button`
  position: relative;
  z-index: 0;
  padding: 5px 12px;
  color: ${(props) => props.color};
  border-radius: 5px;
  font-size: ${(props) => props.theme.fontSize.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${(props) => props.color};
    opacity: 0.12;
  }
`;
