import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="logo-kasa">
          <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png" alt="logo Kasa" />
        </div>
        <ul>
          <li>
            <a href="/">ACCUEIL</a>
          </li>
          <li>
            <a href="/a-propos">A PROPOS</a>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1117817702229233704/LOGO.png" alt="logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default Layout;
