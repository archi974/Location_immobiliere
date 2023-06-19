import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logements from '../fixture/logements.json'
import SlideShow from './slideShow';
import RatingStar from './ratingStar';
import Collapse from './collapse';

const HousingDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState();

    useEffect(() => {
        try {
            const logementData = Logements.find(item => item.id === id);
            if (!logementData) {
                return navigate("/404");
            }
            setLogement(logementData);
        } catch (error) {
            console.error('Erreur lors de la récupération des données : ', error)
        }
    }, [id, navigate]);

    return (
        <article className="housing-detail-component">
            <SlideShow images={logement?.pictures} />
            <div className="housing-owner-info">
                <div className="housing-info">
                    <h1>{logement?.title}</h1>
                    <h2>{logement?.location}</h2>
                    <ul className='tags'>
                        {logement?.tags.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className='owner-info'>
                    <div>
                        <RatingStar rating={logement?.rating} />
                    </div>
                    <div className="owner-profile">
                        <p>{logement?.host.name}</p>
                        <img src={logement?.host.picture} alt="profil du propriétaire" width={64} height={64}/>
                    </div>
                </div>
            </div>
            <div className="collapse-housing-detail">
                <Collapse title="Description">
                    <p>
                        {logement?.description}
                    </p>
                </Collapse>
                <Collapse title="Equipements">
                    <ul>
                        {logement?.equipments.map((equipment, i) => (
                            <li key={i}>{equipment}</li>
                        ))}
                    </ul>

                </Collapse>
            </div>

        </article>
    );
};

export default HousingDetail;