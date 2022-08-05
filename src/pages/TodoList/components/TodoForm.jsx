import { useState } from "react";
import { apiCreateTodo } from "apis/todos";

export default function TodoForm({ onCreate }) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleInputTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleInputContent = (e) => {
    setInputContent(e.target.value);
  };

  const createTodo = () => {
    apiCreateTodo(inputTitle, inputContent).then(() => {
      onCreate();
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

      <button onClick={createTodo}>추가</button>
    </section>
  );
}
