import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/todos" end>
        لیست کارها
      </NavLink>

      <NavLink to="/todos/new">ایجاد کار جدید</NavLink>
    </nav>
  );
}

export default Navbar;
