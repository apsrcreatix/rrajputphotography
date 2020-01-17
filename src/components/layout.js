import React from 'react';
import NavBar from "./navbar";

const Layout = (props) => {
    const { children } = props;
    return <>
        <NavBar />
        <div className="container is-fluid has-background-black-bis">
            {children}
        </div>
    </>
}

export default Layout;