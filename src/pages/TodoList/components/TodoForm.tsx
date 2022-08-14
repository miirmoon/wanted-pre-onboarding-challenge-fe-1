import { useNavigate } from "react-router-dom";
import { apiCreateTodo, apiUpdateTodo } from "apis/todos";
import useInput from "hooks/useInput";

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

  const [inputTitle, setInputTitle] = useInput(
    todo && flag === FORM_FLAG.UPDATE ? todo.title : ""
  );
  const [inputContent, setInputContent] = useInput(
    todo && flag === FORM_FLAG.UPDATE ? todo.content : ""
  );

  const createTodo = () => {
    apiCreateTodo({ title: inputTitle, content: inputContent })
      .then((data) => {
        navigate(`/${data.data.id}`);
        onClose();
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  const updateTodo = () => {
    if (todo) {
      apiUpdateTodo({
        id: todo.id,
        title: inputTitle,
        content: inputContent,
      })
        .then(() => {
          onUpdate();
          onClose();
        })
        .catch((err) => {
          alert(err.response.data.details);
        });
    }
  };

  return (
    <TodoFormBox>
      <TodoFormTitle>{flag}</TodoFormTitle>
      <InputLabel htmlFor="title">제목</InputLabel>
      <BasicInput
        type="text"
        id="title"
        value={inputTitle}
        onChange={setInputTitle}
      />

      <InputLabel htmlFor="content">내용</InputLabel>
      <BasicTextArea
        name="content"
        id="content"
        value={inputContent}
        onChange={setInputContent}
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
    </TodoFormBox>
  );
}

const TodoFormBox = styled.div`
  height: 90%;
`;

const ButtonBox = styled.div`
  margin-top: ${(props) => props.theme.boxSize.small};
  text-align: right;

  ${ColorButton} {
    margin-left: 5px;
  }
`;

const TodoFormTitle = styled.h2`
  margin: ${(props) => props.theme.boxSize.normal};
  text-align: center;
`;

const InputLabel = styled.label`
  display: block;
  margin: ${(props) => props.theme.boxSize.small} 0
    ${(props) => props.theme.boxSize.micro};
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;
