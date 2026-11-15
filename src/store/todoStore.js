import { create } from "zustand";
import { persist } from "zustand/middleware";


const useTodoStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title) => {
        const newTask = {
          id: Date.now(),
          title,
          completed: false,
        };

        set((state) => ({
          tasks: [...state.tasks, newTask],
        }));
      },

      toggleTask: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      },

      editTask: (id, newTitle) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, title: newTitle } : task,
          ),
        }));
      },
    }),
    {
      name: "myTasks",
    },
  ),
);

export default useTodoStore;
