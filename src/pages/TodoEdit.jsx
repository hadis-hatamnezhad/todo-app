import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import AddEditTodo from "../components/AddEditTodo";

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
      <PageHeader title="ویرایش کار" subtitle="عنوان کار خودت رو تغییر بده" />
      <AddEditTodo
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        buttonText="ذخیره تغییرات"
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

export default TodoEdit;
