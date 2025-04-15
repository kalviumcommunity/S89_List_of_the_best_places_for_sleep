import React from 'react';

function SleepPlaceCard() {
  const placeName = 'Serene Lakeside Retreat';
  const imageUrl = 'https://via.placeholder.com/300'; // Replace with a placeholder or actual image URL
  const description = 'A peaceful retreat by a tranquil lake, perfect for unwinding and sleeping soundly.';
  const rating = 4.8;
  const amenities = ['Soundproof rooms', 'Aromatherapy diffusers', 'Luxury bedding'];

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '300px' }}>
      <img src={imageUrl} alt={placeName} style={{ width: '100%', marginBottom: '10px' }} />
      <h2>{placeName}</h2>
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <div>
        <strong>Amenities:</strong>
        <ul>
          {amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SleepPlaceCard;