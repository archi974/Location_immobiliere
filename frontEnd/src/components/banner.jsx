import React from 'react';

const Banner = (props) => {
    const { title, imgSrc, imgAlt} = props;

    return (
        <section className="banner">
            <h1>{title}</h1>
            <img className="bannerImg" src={imgSrc} alt={imgAlt} width={1240} height={223}/>
        </section>
    );
};

export default Banner;