import React from "react"
import Image from "gatsby-image";

function AboutUs() {

    return (
        <section style={{ margin: '3vh 2vw' }}>

            <h1 className="title is-3 has-text-white-bis">Our Team <span role="img" aria-label="building">💪</span></h1>
            <p className="subtitle is-5 has-text-grey-light">Meet our hard working and creative team.</p>
            <div className="columns is-desktop is-centered">
                <div className="column is-half">
                    <div className="columns is-desktop is-centered">
                        <div className="column is-one-quarter is-centered">
                            <Image fixed={
                                {
                                    src: "https://images.unsplash.com/profile-1578849795050-b3548683f266image",
                                    height: "200px",
                                    width: "200px"
                                }
                            } alt="Rajesh Rajput"
                                style={{
                                    borderRadius: '50%'
                                }}></Image>
                        </div>
                        <div className="column">
                            <h6 className="title is-6 has-text-white-ter">Rajesh Rajput</h6>
                            <p className="subtitle is-6 has-text-grey-light">Professional Photographer</p>
                            <p className="subtitle is-4 has-text-grey-lighter">Hi <span role="img" aria-label="wave hands">👋</span>, I am a <a href="https://unsplash.com/@rrajputphotography" target="_blank" rel="noopener noreferrer">crafted photographer</a> who works on weekdays as a <a href="https://www.linkedin.com/in/irajeshrajput" target="_blank" rel="noopener noreferrer">IT Professional</a>. I have been doing this since 2015 and love it. I feel glorious and motivated when somebody uses photos clicked by me for their digital profile pictures. Let's meet this weekend to click your memories with your love ones.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="column is-half">
                    <div className="columns is-desktop is-centered">
                        <div className="column is-one-quarter is-centered">

                            <Image fixed={
                                {
                                    src: "https://images.unsplash.com/profile-1556868300956-d32903305c4c?fit=crop&w=500&h=500&crop=faces",
                                    height: "200px",
                                    width: "200px"
                                }
                            } alt="Rajesh Rajput"
                                style={{
                                    borderRadius: '50%'
                                }}></Image>
                        </div>
                        <div className="column">
                            <h6 className="title is-6 has-text-white-ter">Ranjana Rajput</h6>
                            <p className="subtitle is-6 has-text-grey-light">Leads and Content Manager</p>
                            <p className="subtitle is-4 has-text-grey-lighter">Namastay <span role="img" aria-label="zangy face">🤪</span>, I am a <a href="https://unsplash.com/@ranjanarajput" target="blank" rel="noopener noreferrer">junior photographer</a> who likes to click nature (mostly environment and animals) and busy completing my graduation these days. I do and learning content writing, website development, digital marketing content generation, and many more. Also, am planning to start something of my own sooner or later. </p>
                        </div>
                    </div>
                </div>
            </div>


        </ section>
    )
}

export default AboutUs
