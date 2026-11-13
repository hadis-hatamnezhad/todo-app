import StatCard from "./StatCard";

function TodoStats({ remainingTasks, completedTasks }) {
  return (
    <div className="flex gap-3 mb-[25px]">
      <StatCard count={remainingTasks} label="باقی‌مانده" />

      <StatCard count={completedTasks} label="انجام‌شده" />
    </div>
  );
}

export default TodoStats;
