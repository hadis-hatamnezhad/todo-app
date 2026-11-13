import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AddEditTodo from "../components/AddEditTodo";

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
      <PageHeader title="ایجاد کار جدید" subtitle="کار جدیدت رو وارد کن" />
      <AddEditTodo
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        buttonText="ثبت کار"
        placeholder="یک کار جدید بنویس..."
      />
      <div className="text-center">
        <Link
          className="inline-block text-[15px] text-[#174a7e] transition-colors duration-200 hover:text-[#28669b]"
          to="/todos"
        >
          بازگشت به لیست
        </Link>
      </div>
    </>
  );
}

export default TodoCreate;
