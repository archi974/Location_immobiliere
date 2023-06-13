import React, { useState, useEffect } from "react";

const LocationCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error("Erreur lors de la récupération des données :", err));
  }, []);

  return (
    <div className="card-container">
      {data.map((item, i) => (
        <article key={i} className="card-bloc-item">
          <div className="card-title">
            <h2>{item.title}</h2>
          </div>
          <img src={item.cover} alt={item.title} />
        </article>
      ))}
    </div>
  );
};

export default LocationCard;