import React, { useState } from 'react';
import { Link } from "gatsby";

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    const open = " is-active";
    const hide = "";
    return <nav className="navbar has-background-black-bis" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <strong style={{ background: "royalblue", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800" }}>Rर</strong>
            </Link>
            <a href="javascript:void(0)" role="button" className={(openMenu ? "navbar-burger" + open : "navbar-burger" + hide)} onClick={() => setOpenMenu(!openMenu)} data-target="navMenu" aria-label="menu" aria-expanded={`${openMenu}`}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>

        </div>
        <div id="navbarBasicExample" className={(openMenu ? "navbar-menu has-background-black-bis" + open : "navbar-menu has-background-black-bis" + hide)}>
            <div className="navbar-start has-background-black-bis">
                <Link className="navbar-item has-text-white-bis has-background-black-bis" to="/why-us">
                    Why Us <span role="img" aria-label="thinking">🤔</span>
                </Link>

            </div>
            <div className="navbar-end has-background-black-bis">
                <div className="navbar-item has-background-black-bis">
                    <div className="buttons">
                        <a className="button is-primary" href="https://calendly.com/rrajputphotography/photography-session-with-rajesh-rajput" >
                            <strong>Book Session <span role="img" aria-label="camera">📸</span></strong>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </nav>

}

export default NavBar;
