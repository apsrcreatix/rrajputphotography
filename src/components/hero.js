import React from 'react';

const Hero = () => {
    return <section className="hero is-link is-fullheight-with-navbar" style={{
        margin: '0 -32px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1578647285927-ca819cad19ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3238&q=80")',
        backgroundColor: '#000',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}>
        <div className="hero-body">
            <div className="container">
                <h1 className="title is-1" style={{
                    fontSize: '8vh',
                    lineHeight: '1.4'
                }}>
                    <span style={{
                        background: 'rgba(212, 111, 111, 0.5)'
                    }}>We don't click photos,</span>
                    <br />
                    <span style={{
                        background: 'rgba(110, 220, 40, 0.5)'
                    }}>We make memories</span>
                </h1>
            </div>
        </div>
    </section>
}

export default Hero;