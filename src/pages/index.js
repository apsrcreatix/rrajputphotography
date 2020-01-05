import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout";
import InstagramCards from "../components/instagram-posts";
import NavBar from "../components/navbar";
import "bulma/css/bulma.css";
import "../styles/common.css";

function IndexPage() {

    return (

        <Layout>
            <>
                <SEO title="Home" />
                <NavBar />
                <p>Hello from Rajesh Rajput</p>
                <InstagramCards />
            </>
        </Layout>
    )
}

export default IndexPage
