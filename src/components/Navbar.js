import React from "react";
import "./style-components.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img
            src="logo250.png"
            alt="Logo"
            style={{
              height: "95%",
            }}
          />
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Inicio 🏠</a>
          </li>
          <li>
            <a href="/locales">Locales 🏘️</a>
          </li>
          <li>
            <a href="/">Ayuda ❓</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
