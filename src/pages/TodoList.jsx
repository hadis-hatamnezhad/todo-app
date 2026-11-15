import PageHeader from "../components/PageHeader";
import TodoStats from "../components/TodoStats";
import TaskViewer from "../components/TaskViewer";
import useTodoStore from "../store/todoStore";

function TodoList() {
  const tasks = useTodoStore((state) => state.tasks);
  const toggleTask = useTodoStore((state) => state.toggleTask);
  const deleteTask = useTodoStore((state) => state.deleteTask);

  const completedTasks = tasks.filter((task) => task.completed).length;

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <PageHeader title="وظایف من" subtitle="کارهای کوچک، پیشرفت‌های بزرگ" />

      <section>
        <TodoStats
          remainingTasks={remainingTasks}
          completedTasks={completedTasks}
        />
        <TaskViewer
          tasks={tasks}
          remainingTasks={remainingTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </section>
    </>
  );
}

export default TodoList;
