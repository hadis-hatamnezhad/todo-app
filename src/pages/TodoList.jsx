import { Link } from "react-router-dom";

function TodoList({ tasks, toggleTask, deleteTask }) {
  const completedTasks = tasks.filter((task) => task.completed).length;

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <header className="header">
        <h1>وظایف من</h1>
        <br />
        <p>کارهای کوچک، پیشرفت‌های بزرگ </p>
      </header>

      <section className="task-section">
        <div className="task-stats">
          <div className="stat-box">
            <span className="stat-number">{remainingTasks}</span>
            <span className="stat-label">باقی‌مانده</span>
          </div>

          <div className="stat-box">
            <span className="stat-number">{completedTasks}</span>
            <span className="stat-label">انجام‌شده</span>
          </div>
        </div>

        <h2>لیست کارها: {remainingTasks}</h2>

        {tasks.length === 0 ? (
          <p className="empty-message">هنوز کاری اضافه نکردی!</p>
        ) : (
          tasks.map((task) => (
            <div className="task-item" key={task.id}>
              <button
                className={`task-title ${task.completed ? "completed" : ""}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.completed ? "✓" : "○"} {task.title}
              </button>

              <div className="task-actions">
                <Link
                  className="edit-button"
                  to={`/todos/${task.id}/edit`}
                  aria-label="ویرایش کار"
                >
                  ✎
                </Link>

                <button
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                  aria-label="حذف کار"
                >
                  ×
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
