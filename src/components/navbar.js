import React, { useState } from 'react';

const NavBar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    const open = " is-active";
    const hide = "";
    return <nav className="navbar" role="navigation" aria-label="main navigation" style={{ margin: "0px -32px" }}>
        <div className="navbar-brand">
            <a className="navbar-item" href="https://instagram.com/rrajputphotography">
                <strong style={{ background: "black", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800", margin: "1vw" }}>RR</strong>
            </a>
            <a role="button" className={(openMenu ? "navbar-burger" + open : "navbar-burger" + hide)} onClick={() => setOpenMenu(!openMenu)} data-target="navMenu" aria-label="menu" aria-expanded={`${openMenu}`}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
            </a>

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
                        <a className="button is-primary" href="#" style={{ margin: "1vw" }}>
                            <strong>Hire Me</strong>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </nav>

}

export default NavBar;
