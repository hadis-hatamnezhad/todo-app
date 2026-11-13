import { Link } from "react-router-dom";
import { FiEdit2, FiTrash2, FiCheckCircle, FiCircle } from "react-icons/fi";

function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between gap-2.5 mb-2.5 p-[15px] border border-[#edf0f2] rounded-[9px] text-[#333842]">
      <button
        className={`flex flex-1 items-center gap-2 min-w-0 text-right border-0 bg-transparent text-sm cursor-pointer break-words ${
          task.completed ? "line-through text-[#a0a5af]" : "text-inherit"
        }`}
        onClick={() => toggleTask(task.id)}
      >
        {task.completed ? <FiCheckCircle /> : <FiCircle />}
        {task.title}
      </button>

      <div className="flex items-center gap-[5px]">
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
  );
}

export default TaskItem;
