import React from 'react';

const PetListItem = ({ pet }) => {
  // Use the first image in the images array
  const imageUrl = pet.images && pet.images.length > 0 ? pet.images[0] : 'https://via.placeholder.com/300x200';

  return (
    <div className="pet-list-item">
      <img 
        src={imageUrl} 
        alt={pet.name} 
        style={{ maxWidth: '100%', height: 'auto' }} 
      />
      <div className="details">
        <h3>{pet.name}</h3>
        <p>Breed: {pet.breed}</p>
        <p>Location: {pet.city}, {pet.state}</p>
      </div>
    </div>
  );
};

export default PetListItem;
