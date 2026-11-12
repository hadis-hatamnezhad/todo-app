import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoList from "./pages/TodoList";
import TodoCreate from "./pages/TodoCreate";
import TodoEdit from "./pages/TodoEdit";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("myTasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    );
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex justify-center items-start py-[90px] px-5 max-[480px]:py-[35px] max-[480px]:px-3">
        <div className="w-full max-w-[500px] bg-white p-[30px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-[480px]:py-[22px] max-[480px]:px-4">
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/todos" replace />} />

            <Route
              path="/todos"
              element={
                <TodoList
                  tasks={tasks}
                  toggleTask={toggleTask}
                  deleteTask={deleteTask}
                />
              }
            />

            <Route
              path="/todos/new"
              element={<TodoCreate addTask={addTask} />}
            />

            <Route
              path="/todos/:id/edit"
              element={<TodoEdit tasks={tasks} editTask={editTask} />}
            />

            <Route path="*" element={<Navigate to="/todos" replace />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
