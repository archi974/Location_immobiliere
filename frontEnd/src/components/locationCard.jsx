import React from "react";
import { Link } from 'react-router-dom';


const LocationCard = ({logement}) => {
  const {id, cover, title} = logement;
  
  return (
        <article className="card-bloc-item">
          <Link to={`/fiche-logement/${id}`}>
            <div className="card-title">
              <h2>{title}</h2>
            </div>
            <img src={cover} alt={title} width={360} height={255} />
          </Link>

        </article>
  );
};

export default LocationCard;