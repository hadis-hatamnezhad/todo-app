import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2, FiCheckCircle, FiCircle } from "react-icons/fi";

function TodoList({ tasks, toggleTask, deleteTask }) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <header className="mb-8 text-center">
        <h1 className="mb-[9px] text-[28px] font-semibold tracking-[-0.5px] text-[#174a7e]">
          وظایف من
        </h1>
        <p className="text-sm leading-[1.8] text-[#9298a3]">
          کارهای کوچک، پیشرفت‌های بزرگ
        </p>
      </header>

      <section className="task-section">
        <div className="flex gap-3 mb-[25px]">
          <div className="flex flex-1 flex-col items-center gap-2 rounded-[10px] bg-[#f5f6f8] p-[18px]">
            <span className="text-2xl font-bold text-[#174a7e]">
              {remainingTasks}
            </span>
            <span className="text-[13px] text-[#9298a3]">باقی‌مانده</span>
          </div>

          <div className="flex flex-1 flex-col items-center gap-2 rounded-[10px] bg-[#f5f6f8] p-[18px]">
            <span className="text-2xl font-bold text-[#174a7e]">
              {completedTasks}
            </span>
            <span className="text-[13px] text-[#9298a3]">انجام‌شده</span>
          </div>
        </div>

        <h2 className="mb-[15px] text-center text-lg text-[#174a7e]">
          لیست کارها: {remainingTasks}
        </h2>

        {tasks.length === 0 ? (
          <p className="py-[25px] text-center text-sm text-[#a0a5af]">
            هنوز کاری اضافه نکردی!
          </p>
        ) : (
          tasks.map((task) => (
            <div
              className="flex items-center justify-between gap-2.5 mb-2.5 p-[15px] border border-[#edf0f2] rounded-[9px] text-[#333842]"
              key={task.id}
            >
              {" "}
              <button
                className={`flex flex-1 items-center gap-2 min-w-0 text-right border-0 bg-transparent text-sm cursor-pointer break-words ${
                  task.completed
                    ? "line-through text-[#a0a5af]"
                    : "text-inherit"
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? <FiCheckCircle /> : <FiCircle />}{" "}
                {task.title}{" "}
              </button>
              <div className="flex items-center gap-[5px]">
                {" "}
                <Link
                  className="text-[23px] text-[#a0a5af] py-[5px] px-2 transition-colors duration-200 hover:text-[#174a7e]"
                  to={`/todos/${task.id}/edit`}
                  aria-label="ویرایش کار"
                >
                  <FiEdit2 size={18} />
                </Link>
                <button
                  className="border-0 bg-transparent text-[23px] text-[#a0a5af] cursor-pointer py-[5px] px-2 transition-colors duration-200 hover:text-[#e05252]"
                  onClick={() => deleteTask(task.id)}
                  aria-label="حذف کار"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default TodoList;
