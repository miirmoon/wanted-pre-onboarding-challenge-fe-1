import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiCreateTodo, apiUpdateTodo } from "apis/todos";

import { FORM_FLAG } from "..";

export default function TodoForm({ todo, flag, onUpdate, onClose }) {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  useEffect(() => {
    if (flag === FORM_FLAG.UPDATE) {
      setInputTitle(todo.title);
      setInputContent(todo.content);
    } else if (flag === FORM_FLAG.CREATE) {
      setInputTitle("");
      setInputContent("");
    }
  }, [flag]);

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const createTodo = () => {
    apiCreateTodo(inputTitle, inputContent).then((data) => {
      navigate(`/${data.data.id}`);
      onClose();
    });
  };

  const updateTodo = () => {
    apiUpdateTodo(todo.id, inputTitle, inputContent).then((data) => {
      onUpdate();
      onClose();
    });
  };

  return (
    <section>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        value={inputTitle}
        onChange={handleInputTitle}
      />

      <label htmlFor="content">내용</label>
      <textarea
        name="content"
        id="content"
        value={inputContent}
        onChange={handleInputContent}
      ></textarea>

      {flag === FORM_FLAG.UPDATE ? (
        <>
          <button onClick={updateTodo}>수정</button>
          <button onClick={onClose}>취소</button>
        </>
      ) : (
        <button onClick={createTodo}>추가</button>
      )}
    </section>
  );
}
