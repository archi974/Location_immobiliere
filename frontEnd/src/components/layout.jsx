import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <header>
        <div className="logo-kasa">
          <NavLink to="/">
            <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png" width={210} height={68} alt="logo Kasa" />
          </NavLink>
        </div>
        <ul>
          <li className={activeLink === "/" ? "active" : ""}>
            <NavLink to="/" onClick={() => handleLinkClick("")}>
              Accueil
            </NavLink>
          </li>
          <li className={activeLink === "/a-propos" ? "active" : ""}>
            <NavLink to="/a-propos" onClick={() => handleLinkClick("a-propos")}>
              A Propos
            </NavLink>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1117817702229233704/LOGO.png" width={122} height={40} alt="logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default Layout;
