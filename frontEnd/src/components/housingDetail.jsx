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
            console.log(!logementData);
            if (!logementData) {
                return navigate("/404");
            }
            setLogement(logementData);
        } catch (error) {
            console.error('Erreur lors de la récupération des données : ', error)
        }
    }, [id, navigate]);

    return (
        <article className="housingDetailComponent">
            <SlideShow images={logement?.pictures} />
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