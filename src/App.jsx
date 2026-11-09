import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const savedTasks = localStorage.getItem("myTasks");

    if (savedTasks !== null) {
      localStorage.setItem("myTasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const completedTasks = tasks.filter((task) => task.completed).length;

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const editTask = (id, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );

    setEditingId(null);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <header className="header">
          <h1>My Tasks</h1>
          <p>کارهای کوچک، پیشرفت‌های بزرگ ✨</p>
        </header>

        <section className="todo-form">
          <input
            type="text"
            placeholder="یک کار جدید بنویس..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />

          <button onClick={addTask}>+</button>
        </section>

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

          <h2>
            لیست کارها:
            {tasks.filter((task) => !task.completed).length}
          </h2>

          {tasks.length === 0 ? (
            <p className="empty-message">هنوز کاری اضافه نکردی!</p>
          ) : (
            tasks.map((task) => (
              <div className="task-item" key={task.id}>
                {editingId === task.id ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const newTitle = e.target.elements.editInput.value.trim();

                      if (newTitle !== "") {
                        editTask(task.id, newTitle);
                      }
                    }}
                  >
                    <input
                      type="text"
                      name="editInput"
                      defaultValue={task.title}
                      autoFocus
                    />
                    <button type="submit">ذخیره</button>
                  </form>
                ) : (
                  <>
                    <span
                      className={task.completed ? "completed" : ""}
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.completed ? "✓" : "○"} {task.title}
                    </span>

                    <div>
                      <button onClick={() => setEditingId(task.id)}>✏️</button>

                      <button
                        className="delete-button"
                        onClick={() => deleteTask(task.id)}
                      >
                        ×
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
