import React from 'react';

const FavoriteStar = ({filled}) => {
    return <span>{filled ? '★' : '☆'}</span>
}

export default FavoriteStar;