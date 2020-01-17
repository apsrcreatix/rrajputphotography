import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout";
import InstagramCards from "../components/instagram-posts";
import "bulma/css/bulma.css";
import "../styles/common.css";
import Testimonials from "../components/testimonial";
import Footer from "../components/footer";
import About from "../components/about-us";

function IndexPage() {

    return (

        <Layout>
            <>
                <SEO title="Home" />
                <br />
                <About />
                <br />
                <InstagramCards />
                <br />
                <Testimonials />
                <br />
                <Footer />
            </>
        </Layout>
    )
}

export default IndexPage
