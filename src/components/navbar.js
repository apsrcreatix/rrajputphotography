import React from 'react';
import { Link } from "gatsby";

const NavBar = () => {
    return <nav className="navbar has-background-black-bis is-fixed-top" role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <strong style={{ background: "royalblue", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800" }}>Rर</strong>
            </Link>


        </div>
        <div className="navbar-start" style={{
            width: '100%',
            textAlign: 'right',
        }}>
            <a className="button is-primary" style={{
                float: 'right',
                margin: '8px',
                position: 'absolute',
                right: '0',
                top: '0'
            }} href="https://calendly.com/rrajputphotography/photography-session-with-rajesh-rajput" >
                <strong>Book Session <span role="img" aria-label="camera">📸</span></strong>
            </a>
        </div>

    </nav>

}

export default NavBar;
