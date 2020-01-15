import React from 'react';
import useInstagram from '../hooks/useInstagram';
import Image from 'gatsby-image';

const InstagramPosts = (props) => {
    const instaPhotos = useInstagram();
    if (!instaPhotos) {
        return <div> Refresh to load...
        </div>;
    }

    const { username } = instaPhotos[0];

    return (
        <>

            <h1 className="title">
                👀 Instagram
                <a href={`https://instagram.com/${username}`}
                    style={{
                        marginLeft: "2px"
                    }}
                >
                    @{username}
                </a>
            </h1>


            <div className="columns is-mobile hide-scrollbar" style={{ overflow: "auto", margin: "0 -32px" }}>
                {instaPhotos.map(photo => (
                    <div key={photo.id} className="column">
                        <a href={`https://instagram.com/p/${photo.id}/`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image
                                key={photo.id}
                                fixed={{
                                    src: photo.original,
                                    width: photo.fixed.width,
                                    height: photo.fixed.height
                                }}
                                alt={photo.caption}
                                style={{ marginRight: "20px", marginBottom: "0" }} />

                        </a>
                    </div>
                ))}
                <div className="column">
                    <a href="https://www.instagram.com/rrajputphotography" target="_blank"
                        rel="noopener noreferrer">
                        <div style={{ width: "200px", height: "200px", background: "#fafafa", textAlign: "center", paddingTop: "45%" }}>
                            View More <span role="img" aria-label="right arrow">➡️</span>
                        </div>
                    </a>
                </div>

            </div>




        </>

    );
};





export default InstagramPosts  
