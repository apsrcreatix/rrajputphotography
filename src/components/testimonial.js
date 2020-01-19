import React from 'react';
import Image from 'gatsby-image';
import { TESTIMONIAL } from "../data/testimonials";
import { graphql, useStaticQuery } from "gatsby";

const Testimonials = (props) => {

    const data = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "images"}}, sort: {fields: name}) {
        edges {
          node {
            sourceInstanceName
            childImageSharp {
              fixed {
                src
                originalName
              }
            }
          }
        }
      }
    }
  `)

    const filterData = data.allFile.edges.map(node => ({
        ...node.node.childImageSharp
    }))

    return (
        <>
            <div style={{ margin: '3vh 2vw' }}>
                <h1 className="title is-3 has-text-white-bis">
                    Testimonials <span role="img" aria-label="love-letter">💌</span>
                </h1>
                <p className="subtitle is-5 has-text-grey-light">These are reviews by our happy friends we have made through our work.</p>
            </div>
            <div className="columns is-desktop is-multiline" style={{ overflow: "auto", margin: "0 -32px" }}>
                {TESTIMONIAL.map((value, index) => (
                    <div className="column is-4" key={value.image}>
                        <div className="card has-background-black-ter" key={value.image} style={{ boxShadow: "none", borderRadius: '5px' }}>

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <Image fixed={{ src: filterData[index].fixed.src, height: 50, width: 50 }}
                                                alt={"Image of " + value.name}
                                                style={{ borderRadius: "50%" }}
                                            />
                                        </figure>
                                    </div>

                                    <div className="media-content">
                                        <p className="title is-5 has-text-white-bis">{value.name}</p>
                                        <p className="subtitle is-6 has-text-grey-light">{value.location}</p>
                                    </div>
                                </div>

                                <div className="content has-text-grey-lighter">
                                    {value.comment}
                                    <br />
                                    <br />
                                    <div className="tags">
                                        {value.tags.map(tags => <span className="tag has-background-grey-dark is-dark" key={tags}>{tags}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}

            </div>




        </>

    );
};





export default Testimonials;  
