import { NavLink } from "react-router-dom";
import insta from "../../assets/logos and backgrounds/insta.jpeg";
import logoImageKlein from "../../assets/logos and backgrounds/B & B logo2 klein.jpg";
import React from "react";

export function Footer() {
    return (
        <div className="footer-container background">
            <div className="footer-background">
                <p>This page is made possible by <a href="https://www.novi.nl/" target="_blank">NOVI hogeschool</a>.</p>
                <p>en</p>
                <p>Trademark <em>Van Der Maas P&C™</em></p>
                <span>
          <NavLink to="https://www.instagram.com/beersenbrewskys/" target="_blank">
            <img className="smaller_logo" src={insta} alt="instagram logo" />
          </NavLink>
          <NavLink to="http://localhost:5173/" target="_blank">
            <img className="smaller_logo" src={logoImageKlein} alt="logo" />
          </NavLink>
        </span>
            </div>
        </div>
    );
}
export default Footer;