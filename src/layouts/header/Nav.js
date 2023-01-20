import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../components/Logo";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/",
  },
  {
    id: 2,
    title: "My project",
    to: "my-project",
  },
  {
    id: 3,
    title: "Contact",
    to: "contact",
  },
];
const Nav = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center bg-secondary shadow">
        <Logo to={"/"}></Logo>
        <nav className="p-[4.5rem] flex justify-around items-center max-w-[80rem] flex-grow">
          {links.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) => (isActive ? "text-blue" : "")}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Nav;
