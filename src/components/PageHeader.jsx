function PageHeader({ title, subtitle }) {
  return (
    <header className="mb-8 text-center">
      <h1 className="mb-[9px] text-[28px] font-semibold tracking-[-0.5px] text-[#174a7e]">
        {title}
      </h1>

      <p className="text-sm leading-[1.8] text-[#9298a3]">{subtitle}</p>
    </header>
  );
}

export default PageHeader;
