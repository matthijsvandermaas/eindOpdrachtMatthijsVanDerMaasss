import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import insta from "../../assets/logos and backgrounds/insta.jpeg";
import logoImageKlein from "../../assets/logos and backgrounds/B & B logo2 klein.jpg";
import logovdmaas_penc from "../../assets/logos and backgrounds/logo penc.png";

export function Footer() {

    return (
        <div className="background footer-container">
            <div>
                <p>This page is made possible by <a href="https://www.novi.nl/" target="_blank">NOVI hogeschool</a>.</p>
                <p>en</p>
                <p>Trademark <img className="inline_logo" src={logovdmaas_penc} alt="van der maas PenC logo" /><em>Van Der Maas P&C™</em></p>
                <span>
          <NavLink to="https://www.instagram.com/beersenbrewskys/" target="_blank">
            <img className="smaller_logo" src={logoImageKlein} alt="BenB logo" />
          </NavLink>
          <NavLink to="http://localhost:5173/" target="_blank">
              <img className="smaller_logo" src={insta} alt="instagram logo" />
          </NavLink>
        </span>
            </div>
        </div>
    );
}

export default Footer;
