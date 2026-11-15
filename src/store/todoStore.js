import { create } from "zustand";

// خواندن اطلاعات قبلی از localStorage
const loadTasks = () => {
  try {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
};

// ساخت Store
const useTodoStore = create((set) => ({
  tasks: loadTasks(),

  // اضافه کردن کار
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

  // تغییر وضعیت انجام کار
  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  },

  // حذف کار
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },

  // ویرایش کار
  editTask: (id, newTitle) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task,
      ),
    }));
  },
}));

// ذخیره خودکار تغییرات در localStorage
useTodoStore.subscribe((state) => {
  try {
    localStorage.setItem("myTasks", JSON.stringify(state.tasks));
  } catch {
    // در صورت بروز خطای ذخیره‌سازی
  }
});

export default useTodoStore;
