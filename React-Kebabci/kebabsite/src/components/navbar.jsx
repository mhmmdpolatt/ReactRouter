import React from "react";
import { NavLink } from "react-router-dom";
import { GiSteak } from "react-icons/gi";
import "../styles/navbar.css"
function Navbar() {
    return (
        <>
            <div className="navDiv">
                <div className="leftNav">

                    <h3>KübŞeker Kebap</h3>
                    <GiSteak className="gis" />
                </div>
                <nav className="mainNav">

                    <NavLink to="/">Anasayfa</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/contact">İletişim</NavLink>
                    <NavLink to="/about">Hakkımızda</NavLink>
                </nav>
            </div>

        </>
    );
}

export default Navbar;