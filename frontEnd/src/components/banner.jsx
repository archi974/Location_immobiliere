import React from 'react';

const Banner = (props) => {
    const { imgSrc, imgAlt} = props;
    
    return (
        <section className="banner">
            <h1>Chez vous, partout et ailleurs</h1>
            <img className="bannerImg" src={imgSrc} alt={imgAlt} />
        </section>
    );
};

export default Banner;