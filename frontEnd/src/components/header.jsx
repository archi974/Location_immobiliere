import React from "react";
import './scss/header.module.css';
import '../App.css';

const Header = () => {
    return (
        <header>
            <img src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png" alt="logo Kasa" />
            <ul>
                <li>
                    <a href="/">ACCUEIL</a>
                </li>
                <li>
                    <a href="/a-propos">A PROPOS</a>
                </li>
            </ul>
        </header>
    );
};
export default Header;