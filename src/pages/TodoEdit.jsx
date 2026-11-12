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
      <header className="mb-8 text-center">
        <h1 className="mb-[9px] text-[28px] font-semibold tracking-[-0.5px] text-[#174a7e]">
          ویرایش کار
        </h1>
        <p className="text-sm leading-[1.8] text-[#9298a3]">
          عنوان کار خودت رو تغییر بده
        </p>
      </header>

      <form className="flex flex-col gap-3 mb-5" onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          className="w-full p-[14px] border border-[#e5e7eb] rounded-[9px] outline-none text-sm bg-white transition-all duration-300 focus:border-[#174a7e] focus:shadow-[0_0_0_3px_rgba(23,74,126,0.13)]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <button
          type="submit"
          className="w-full p-[13px] border-0 rounded-[9px] bg-[#174a7e] text-sm text-white cursor-pointer transition-all duration-300 hover:bg-[#28669b] hover:-translate-y-0.5 hover:shadow-[0_5px_12px_rgba(23,74,126,0.16)] active:translate-y-0 active:shadow-none"
        >
          ذخیره تغییرات
        </button>{" "}
      </form>

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
