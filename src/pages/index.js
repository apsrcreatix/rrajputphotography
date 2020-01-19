import React, { useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout";
import InstagramCards from "../components/instagram-posts";
import "bulma/css/bulma.css";
import "../styles/common.css";
import Testimonials from "../components/testimonial";
import Footer from "../components/footer";
import About from "../components/about-us";
import Hero from "../components/hero";

function IndexPage() {
    const [isDark, setDark] = useState(false);
    return (

        <Layout isDark={isDark} handleDark={() => setDark(!isDark)}>
            <>
                <SEO title="Home" />
                <Hero />
                <p className="caption has-text-grey-dark has-text-centered" style={{ margin: '1%' }}>This photo is taken by <a href="https://unsplash.com/@rrajputphotography" target="_blank" rel="noopener noreferrer">Rajesh Rajput </a> and is avaiable at <a href="https://unsplash.com/@rrajputphotography" target="_blank" rel="noopener noreferrer">Unsplash</a> for free!</p>
                <br />
                <About isDark={isDark} />
                <br />
                <hr style={{
                    border: '1px solid #242424',
                    height: '0.5px',
                    width: '33.3%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 33.3%'
                }} />
                <br />
                <InstagramCards isDark={isDark} />
                <br />
                <hr style={{
                    border: '1px solid #242424',
                    height: '0.5px',
                    width: '33.3%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 33.3%'
                }} />
                <br />
                <Testimonials isDark={isDark} />
                <br />
                <hr style={{
                    border: '1px solid #242424',
                    height: '0.5px',
                    width: '33.3%',
                    justifyContent: 'center',
                    textAlign: 'center',
                    margin: '0 33.3%'
                }} />
                <br />
                <Footer isDark={isDark} />
            </>
        </Layout >
    )
}

export default IndexPage
