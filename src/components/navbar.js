import React, { useState } from 'react';
import { Link } from "gatsby";
const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    const open = " is-active";
    const hide = "";
    return <nav className="navbar" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <strong style={{ background: "royalblue", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800" }}>Rर</strong>
            </Link>
            <a role="button" className={(openMenu ? "navbar-burger" + open : "navbar-burger" + hide)} onClick={() => setOpenMenu(!openMenu)} data-target="navMenu" aria-label="menu" aria-expanded={`${openMenu}`}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>

        </div>
        <div id="navbarBasicExample" className={(openMenu ? "navbar-menu" + open : "navbar-menu" + hide)}>
            <div className="navbar-start">
                <Link className="navbar-item" to="/about-us">
                    About Us 😊
                </Link>
                <Link className="navbar-item" to="/why-us">
                    Why Us 🤔
                </Link>

            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" href="#" >
                            <strong>Hire Me 📸</strong>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </nav>

}

export default NavBar;
