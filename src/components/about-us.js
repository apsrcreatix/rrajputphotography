import React from "react"
import Image from "gatsby-image";
import { TEAM } from "../data/our-team";

function AboutUs(props) {

    return (
        <section style={{ margin: '3vh 2vw' }}>

            <h1 className={"title is-3 " + (props.isDark ? "has-text-white-bis" : "has-text-black-bis")}>Our Team<span role="img" aria-label="building">💪</span></h1>
            <p className={"subtitle is-5 " + (props.isDark ? "has-text-grey-light" : "has-text-grey-dark")}>Meet our hard working and creative team.</p>

            <div className="columns is-desktop is-centered is-multiline">
                {TEAM.map((value, index) => <div className="column is-6">
                    <div className="columns is-desktop is-centered">
                        <div className="column is-one-quarter is-centered">
                            <Image fixed={
                                {
                                    src: value.image,
                                    height: "20vh",
                                    width: "20vh"
                                }
                            } alt={value.name}
                                style={{
                                    borderRadius: '50%'
                                }}></Image>
                        </div>
                        <div className="column">
                            <h6 className={"title is-6 " + (props.isDark ? "has-text-white-ter" : "has-text-black-ter")}>{value.name}</h6>
                            <p className={"subtitle is-6 " + (props.isDark ? "has-text-grey-light" : "has-text-grey-dark")}>{value.designation}</p>
                            <p className={"subtitle is-4 " + (props.isDark ? "has-text-grey-lighter" : "has-text-dark")}>{value.content}</p>
                            <p>
                                {value.links.map(link => link)}
                            </p>

                        </div>
                    </div>
                </div>
                )}
            </div>
        </ section>
    )
}

export default AboutUs
