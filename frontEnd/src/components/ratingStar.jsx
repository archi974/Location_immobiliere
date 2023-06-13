import React from 'react';

const RatingStar = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span className="starRating" key={index}>{index < rating ? '★' : '☆'}</span>
    ));
    return <>{stars}</>;
}

export default RatingStar;