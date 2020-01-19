import React from 'react';
import { Link } from "gatsby";

const NavBar = (props) => {

    const sun = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>;

    const moon = <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;

    return <nav className={"navbar is-fixed-top " + (props.isDark ? "has-background-black-bis" : "has-background-white-bis")} role="navigation" aria-label="main navigation" >
        <div className="navbar-brand">
            <Link className="navbar-item" to="/">
                <strong style={{ background: "royalblue", color: "white", borderRadius: "50px", padding: "8px 11px", fontWeight: "800" }}>Rर</strong>
            </Link>


        </div>
        <div className="navbar-start" style={{
            width: '100%',
            textAlign: 'right',
        }}>
            <button style={{
                float: 'right',
                margin: '8px',
                position: 'absolute',
                right: '160px',
                top: '0'
            }} className={"button " + (props.isDark ? "has-background-warning has-text-grey-dark" : "has-background-black-ter has-text-white")} onClick={props.handleDark}>{props.isDark ? sun : moon}</button>
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
