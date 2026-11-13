function AddEditTodo({
  title,
  setTitle,
  handleSubmit,
  buttonText,
  placeholder,
}) {
  return (
    <form className="flex flex-col gap-3 mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full p-[14px] border border-[#e5e7eb] rounded-[9px] outline-none text-sm bg-white transition-all duration-300 focus:border-[#174a7e] focus:shadow-[0_0_0_3px_rgba(23,74,126,0.13)]"
        placeholder={placeholder}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />

      <button
        type="submit"
        className="w-full p-[13px] border-0 rounded-[9px] bg-[#174a7e] text-sm text-white cursor-pointer transition-all duration-300 hover:bg-[#28669b] hover:-translate-y-0.5 hover:shadow-[0_5px_12px_rgba(23,74,126,0.16)] active:translate-y-0 active:shadow-none"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default AddEditTodo;
