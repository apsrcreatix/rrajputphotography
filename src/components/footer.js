import React from 'react';

const Layout = (props) => {
    return <footer className="footer" style={{ margin: "0 -32px", background: "transparent" }}>
        <div className="content has-text-centered ">
            <p>
                <strong className={props.isDark ? "has-text-white-ter" : "has-text-black-ter"}>Gifted  by <a href="https://apsrcreatix.me">apsrcreatix</a> with <span role="img" aria-label="heart">❤️</span></strong>
            </p>
        </div>
    </footer>

}

export default Layout;