import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TodoCreate({ addTask }) {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    addTask(title.trim());
    navigate("/todos");
  };

  return (
    <>
      <header className="header">
        <h1>ایجاد کار جدید</h1>
        <br />
        <p>کار جدیدت رو وارد کن </p>
      </header>
      <form className="page-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="یک کار جدید بنویس..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />

        <button type="submit">ثبت کار</button>
      </form>
      <Link
        className="back-link"
        to="/todos"
        style={{ textDecoration: "none" }}
      >
        بازگشت به لیست
      </Link>{" "}
    </>
  );
}

export default TodoCreate;
