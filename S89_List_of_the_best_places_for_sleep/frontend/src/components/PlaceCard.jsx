import React from 'react';

const PlaceCard = ({ name, location, description, rating, pricePerNight }) => {
    return (
        <div className="place-card">
            <h2>{name}</h2>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Rating:</strong> {rating} / 5</p>
            <p><strong>Price per Night:</strong> ${pricePerNight}</p>
        </div>
    );
};

export default PlaceCard;