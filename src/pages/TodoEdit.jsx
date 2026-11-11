import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function TodoEdit({ tasks, editTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((item) => String(item.id) === id);

  const [title, setTitle] = useState(() => task?.title ?? "");

  if (!task) {
    return <Navigate to="/todos" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    editTask(task.id, title.trim());
    navigate("/todos");
  };

  return (
    <>
      <header className="header">
        <h1>ویرایش کار</h1>
        <p>عنوان کار خودت رو تغییر بده ✏️</p>
      </header>

      <form className="page-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <button type="submit">ذخیره تغییرات</button>
      </form>

      <Link className="back-link" to="/todos">
        بازگشت به لیست
      </Link>
    </>
  );
}

export default TodoEdit;
