import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import TodoList from "./pages/TodoList";
import TodoCreate from "./pages/TodoCreate";
import TodoEdit from "./pages/TodoEdit";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />

          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos/new" element={<TodoCreate />} />
          <Route path="/todos/:id/edit" element={<TodoEdit />} />
          <Route path="*" element={<Navigate to="/todos" replace />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
}

export default App;
