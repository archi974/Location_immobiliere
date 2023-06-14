import React from "react";
import { Link } from 'react-router-dom';
import logements from '../fixture/logements.json'

const LocationCard = () => {

  return (
    <div className="card-container">
      {logements.map((item, i) => (
        <article key={i} className="card-bloc-item">
          <Link to={`/fiche-logement/${item.id}`}>
            <div className="card-title">
              <h2>{item.title}</h2>
            </div>
            <img src={item.cover} alt={item.title} />
          </Link>

        </article>
      ))}
    </div>
  );
};

export default LocationCard;