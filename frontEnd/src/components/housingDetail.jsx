import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FavoriteStar from './favoriteStar';
import Carousel from './carousel';

const HousingDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState();

    useEffect(() => {
        fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
            .then(res => res.json())
            .then(data => {
                const logementData = data.find(item => item.id === id);
                setLogement(logementData);
            })
            .catch(err => console.error("Erreur lors de la récupération des données :", err));
    }, [id]);

    return (
        <article className="housingDetailComponent">
            <Carousel images={logement?.pictures} />
            <h1>{logement?.title}</h1>
            <p>{logement?.location}</p>
            <ul>
                {logement?.tags.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <div className='ownerInfo'>
                <div>
                    {/* {logement?.rating.map((rating, i) => (
                            <div key={i}>
                            </div>
                        ))} */}
                    <FavoriteStar filled={logement?.rating} />
                    <FavoriteStar filled={logement?.rating} />
                    <FavoriteStar filled={logement?.rating} />
                    <FavoriteStar filled={logement?.rating} />
                    <FavoriteStar filled={logement?.rating} />
                </div>
                <div className="ownerProfile">
                    <p>{logement?.host.name}</p>
                    <img src={logement?.host.picture} alt="profil du propriétaire" />
                </div>
            </div>
            <p>COLLAPSE</p>
        </article>
    );
};

export default HousingDetail;