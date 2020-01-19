import React from 'react';
import NavBar from "./navbar";

const Layout = (props) => {
    const { children } = props;
    return <>
        <NavBar isDark={props.isDark} handleDark={props.handleDark} />
        <div className={"container is-fluid " + (props.isDark ? "has-background-black-bis" : "has-background-white-bis")}>
            {children}
        </div>
    </>
}

export default Layout;