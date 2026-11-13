import TaskItem from "./TaskItem";

function TaskViewer({ tasks, remainingTasks, toggleTask, deleteTask }) {
  return (
    <>
      <h2 className="mb-[15px] text-center text-lg text-[#174a7e]">
        لیست کارها: {remainingTasks}
      </h2>

      {tasks.length === 0 ? (
        <p className="py-[25px] text-center text-sm text-[#a0a5af]">
          هنوز کاری اضافه نکردی!
        </p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </>
  );
}

export default TaskViewer;
