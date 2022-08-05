import { useEffect } from "react";
import styled from "styled-components";
import { Container } from "components/layout/Container";
import { MdClose } from "react-icons/md";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.style.cssText = `overflow: hidden`;
    return () => {
      document.body.style.cssText = `overflow: unset`;
    };
  });

  const onDimClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <section>
      <ModalDim onClick={onDimClick} />
      <ModalBox onClick={onDimClick}>
        <ModalContents>
          <CloseIcon>
            <MdClose onClick={onClose} />
          </CloseIcon>
          {children}
        </ModalContents>
      </ModalBox>
    </section>
  );
}

const ModalDim = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.dim};
`;

const ModalBox = styled(Container)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 101;
  padding: ${(props) => props.theme.boxSize.big}
    ${(props) => props.theme.boxSize.large};
  box-shadow: none;
`;

const ModalContents = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: ${(props) => props.theme.boxSize.medium};
  border-radius: ${(props) => props.theme.boxSize.micro};
  background-color: ${(props) => props.theme.colors.white};
`;

const CloseIcon = styled.i`
  position: sticky;
  top: 0;
  z-index: 250;
  display: block;
  color: ${(props) => props.theme.colors.grey10};
  font-size: ${(props) => props.theme.fontSize.large};
  text-align: right;

  svg {
    cursor: pointer;
  }
`;
