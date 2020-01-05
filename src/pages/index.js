import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout";
import InstagramCards from "../components/instagram-posts";
import "bulma/css/bulma.css";
import "../styles/common.css";

function IndexPage() {

    return (

        <Layout>
            <>
                <SEO title="Home" />
                <p>Hello from Rajesh Rajput</p>
                <InstagramCards />
            </>
        </Layout>
    )
}

export default IndexPage
