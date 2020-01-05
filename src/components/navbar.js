import React, { useState } from 'react';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    const open = " is-active";
    const hide = "";
    return <nav className="navbar" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <a className="navbar-item" href="https://instagram.com/rrajputphotography">
                <strong style={{ background: "black", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800" }}>RR</strong>
            </a>
            <button role="button" className={(openMenu ? "navbar-burger" + open : "navbar-burger" + hide)} onClick={() => setOpenMenu(!openMenu)} data-target="navMenu" aria-label="menu" aria-expanded={`${openMenu}`}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </button>

        </div>
        <div id="navbarBasicExample" className={(openMenu ? "navbar-menu" + open : "navbar-menu" + hide)}>
            <div className="navbar-start">
                <a className="navbar-item" href="#">
                    About Us
                </a>
                <a className="navbar-item" href="#">
                    Why Us
                </a>

            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary" href="#" >
                            <strong>Hire Me</strong>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </nav>

}

export default NavBar;
