import React from "react"
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

    return (

        <Layout>
            <>
                <SEO title="Home" />
                <Hero />
                <p className="caption has-text-grey-light has-text-centered" style={{ margin: '1%' }}>This photo is taken by <a href="https://unsplash.com/@rrajputphotography" target="_blank" rel="noopener noreferrer">Rajesh Rajput</a>
                    and is avaiable at <a href="https://unsplash.com/@rrajputphotography" target="_blank" rel="noopener noreferrer">Unsplash</a> for free!</p>
                <br />
                <About />
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
                <InstagramCards />
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
                <Testimonials />
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
                <Footer />
            </>
        </Layout>
    )
}

export default IndexPage
