import React, { useState, useEffect } from 'react';
import NotFoundPage from '../pages/404';
import { useParams } from 'react-router-dom';
import logements from '../fixture/logements.json'
import RatingStar from './ratingStar';
import Carousel from './carousel';
import Collapse from './collapse';

const HousingDetail = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState();

    useEffect(() => {
        const logementData = logements.find(item => item.id === id);
        if (logementData) {
            setLogement(logementData);
        }
    }, [id]);
    if (!logement) {
        return <NotFoundPage />;
    }
    return (
        <article className="housingDetailComponent">
            <Carousel images={logement?.pictures} />
            <h1>{logement?.title}</h1>
            <p>{logement?.location}</p>
            <ul className='tags'>
                {logement?.tags.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <div className='ownerInfo'>
                <div>
                    <RatingStar rating={logement?.rating} />
                </div>
                <div className="ownerProfile">
                    <p>{logement?.host.name}</p>
                    <img src={logement?.host.picture} alt="profil du propriétaire" />
                </div>
            </div>
            <div className="collapse">
                <Collapse title="Description">
                    <p>
                        {logement?.description}
                    </p>
                </Collapse>
                <Collapse title="Equipements">
                    <ul>
                        <li>{logement?.equipments[0]}</li>
                        <li>{logement?.equipments[1]}</li>
                        <li>{logement?.equipments[2]}</li>
                        <li>{logement?.equipments[3]}</li>
                        <li>{logement?.equipments[4]}</li>
                    </ul>

                </Collapse>
            </div>
        </article>
    );
};

export default HousingDetail;