import { useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
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
      <AppLayout>
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

          <Route path="/todos/new" element={<TodoCreate addTask={addTask} />} />

          <Route
            path="/todos/:id/edit"
            element={<TodoEdit tasks={tasks} editTask={editTask} />}
          />

          <Route path="*" element={<Navigate to="/todos" replace />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;
