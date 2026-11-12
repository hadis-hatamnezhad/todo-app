import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2.5 mb-[30px] pb-[18px] border-b border-[#edf0f2]">
      <NavLink
        to="/todos"
        end
        className={({ isActive }) =>
          `flex-1 text-center text-[13px] py-[11px] px-2 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-[#174a7e] text-white shadow-[0_4px_10px_rgba(23,74,126,0.15)]"
              : "text-[#9298a3] hover:bg-[#f0f1f4] hover:text-[#174a7e]"
          }`
        }
      >
        لیست کارها
      </NavLink>

      <NavLink
        to="/todos/new"
        className={({ isActive }) =>
          `flex-1 text-center text-[13px] py-[11px] px-2 rounded-lg transition-all duration-300 ${
            isActive
              ? "bg-[#174a7e] text-white shadow-[0_4px_10px_rgba(23,74,126,0.15)]"
              : "text-[#9298a3] hover:bg-[#f0f1f4] hover:text-[#174a7e]"
          }`
        }
      >
        ایجاد کار جدید
      </NavLink>
    </nav>
  );
}

export default Navbar;
