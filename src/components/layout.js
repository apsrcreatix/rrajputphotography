import React from 'react';

const Layout = (props) => {
    const { children } = props;
    return <div className="container is-fluid">
        {children}
    </div>

}

export default Layout;