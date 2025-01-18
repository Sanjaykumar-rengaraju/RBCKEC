import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from "@heroicons/react/24/solid";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between px-5 py-5 bg-transparent z-50">
      <h3 className="transition ease-in-out delay-50 font-extrabold text-4xl tracking-widest hover:text-white hover:scale-x-150 text-teal-400">RBC</h3>
      <nav className="relative hidden md:block">
        <ul className="flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/pre-events">Past-Events</NavItem>
          <NavItem to="/upc-events">Register</NavItem>
          {/* Add other nav items here */}
        </ul>
      </nav>
      <button onClick={toggleMenu} className="block md:hidden text-teal-400 font-bold">
        <Bars3Icon className="h-6 w-6"/>
      </button>
      {menu && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-transparent text-teal-400">
          <ul className="flex flex-col items-end">
            <MobileNavItem to="/" onClick={toggleMenu}>Home</MobileNavItem>
            <MobileNavItem to="/about" onClick={toggleMenu}>About</MobileNavItem>
            <MobileNavItem to="/pre-events" onClick={toggleMenu}>Past-Events</MobileNavItem>
            <MobileNavItem to="/upc-events" onClick={toggleMenu}>Register</MobileNavItem>
            {/* Add other mobile nav items here */}
          </ul>
        </nav>
      )}
    </header>
  );
}

const NavItem = ({ to, children }) => (
  <li className="hover:text-white hover:-translate-y-1 hover:-translate-x-1 font-extrabold px-3 tracking-widest text-4xl text-teal-400 transition duration-300 ease-in-out">
    <Link to={to}>
      {children}
    </Link>
  </li>
);

const MobileNavItem = ({ to, children, onClick }) => (
  <li className="hover:text-white font-extrabold px-3 py-2 tracking-widest text-2xl hover:-translate-y-1 text-teal-400 transition duration-300 ease-in-out">
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  </li>
);

export default Navbar;
