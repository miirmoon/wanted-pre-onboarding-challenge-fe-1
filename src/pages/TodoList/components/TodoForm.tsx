import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCreateTodo, apiUpdateTodo } from "apis/todos";

import styled from "styled-components";
import theme from "styles/theme";
import { ColorButton } from "components/ButtonSet";
import { BasicInput, BasicTextArea } from "components/InputSet";

import { FORM_FLAG } from "..";
import { Todo } from "types/todo";

type TodoFormProps = {
  todo: Todo | null;
  flag: string;
  onUpdate: () => void;
  onClose: () => void;
};

export default function TodoForm({
  todo,
  flag,
  onUpdate,
  onClose,
}: TodoFormProps) {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  useEffect(() => {
    if (!todo) return;
    if (flag === FORM_FLAG.UPDATE) {
      setInputTitle(todo.title);
      setInputContent(todo.content);
    } else if (flag === FORM_FLAG.CREATE) {
      setInputTitle("");
      setInputContent("");
    }
  }, [flag]);

  const handleInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
  };

  const createTodo = () => {
    apiCreateTodo({ title: inputTitle, content: inputContent }).then((data) => {
      navigate(`/${data.data.id}`);
      onClose();
    });
  };

  const updateTodo = () => {
    if (todo) {
      apiUpdateTodo({
        id: todo.id,
        title: inputTitle,
        content: inputContent,
      }).then(() => {
        onUpdate();
        onClose();
      });
    }
  };

  return (
    <FormBox>
      <StyledTitle>{flag}</StyledTitle>
      <StyledLabel htmlFor="title">제목</StyledLabel>
      <BasicInput
        type="text"
        id="title"
        value={inputTitle}
        onChange={handleInputTitle}
      />

      <StyledLabel htmlFor="content">내용</StyledLabel>
      <BasicTextArea
        name="content"
        id="content"
        value={inputContent}
        onChange={handleInputContent}
      ></BasicTextArea>

      <ButtonBox>
        {flag === FORM_FLAG.UPDATE ? (
          <>
            <ColorButton color={theme.colors.yellow} onClick={updateTodo}>
              수정
            </ColorButton>
            <ColorButton color={theme.colors.grey15} onClick={onClose}>
              취소
            </ColorButton>
          </>
        ) : (
          <ColorButton color={theme.colors.blue} onClick={createTodo}>
            추가
          </ColorButton>
        )}
      </ButtonBox>
    </FormBox>
  );
}

const FormBox = styled.div`
  height: 90%;
`;

const ButtonBox = styled.div`
  margin-top: ${(props) => props.theme.boxSize.small};
  text-align: right;

  ${ColorButton} {
    margin-left: 5px;
  }
`;

const StyledTitle = styled.h2`
  margin: ${(props) => props.theme.boxSize.normal};
  text-align: center;
`;

const StyledLabel = styled.label`
  display: block;
  margin: ${(props) => props.theme.boxSize.small} 0
    ${(props) => props.theme.boxSize.micro};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
