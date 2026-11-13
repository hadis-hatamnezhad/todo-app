function StatCard({ count, label }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2 rounded-[10px] bg-[#f5f6f8] p-[18px]">
      <span className="text-2xl font-bold text-[#174a7e]">{count}</span>

      <span className="text-[13px] text-[#9298a3]">{label}</span>
    </div>
  );
}

export default StatCard;
