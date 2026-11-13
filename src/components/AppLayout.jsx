import Navbar from "./Navbar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex justify-center items-start py-[90px] px-5 max-[480px]:py-[35px] max-[480px]:px-3">
      <div className="w-full max-w-[500px] bg-white p-[30px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] max-[480px]:py-[22px] max-[480px]:px-4">
        <Navbar />

        {children}
      </div>
    </div>
  );
}

export default AppLayout;
