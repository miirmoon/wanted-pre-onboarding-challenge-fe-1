export default function TodoDetail({ todo }) {
  return (
    <section>
      {todo && (
        <>
          <div>{todo.title}</div>
          <div>{todo.content}</div>

          <button>수정</button>
          <button>삭제</button>
        </>
      )}
    </section>
  );
}
