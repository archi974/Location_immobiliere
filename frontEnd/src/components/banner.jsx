import React from 'react';

const Banner = (props) => {
    const { title, imgSrc, imgAlt} = props;

    return (
        <section className="banner">
            <h1>{title}</h1>
            <img className="bannerImg" src={imgSrc} alt={imgAlt} />
        </section>
    );
};

export default Banner;