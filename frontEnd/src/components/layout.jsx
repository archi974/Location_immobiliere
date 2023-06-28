import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <div className="logo-kasa">
          <a href="/">
            <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png" width={210} height={68} alt="logo Kasa" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/a-propos">A Propos</a>
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
