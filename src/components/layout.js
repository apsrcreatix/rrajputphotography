import React from 'react';
import NavBar from "./navbar";

const Layout = (props) => {
    const { children } = props;
    return <>
        <NavBar />
        <div className="container is-fluid">
            {children}
        </div>
    </>
}

export default Layout;