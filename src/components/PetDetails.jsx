import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PetsContext } from '../services/PetsContext';

const PetDetails = () => {
  const { id } = useParams(); // Get the pet ID from the URL parameters
  const { pets } = useContext(PetsContext); // Access pets from context
  const [pet, setPet] = useState(null); // State to hold the selected pet

  useEffect(() => {
    // Find the pet with the matching ID
    const foundPet = pets.find(pet => pet.id === parseInt(id, 10));
    setPet(foundPet);
  }, [id, pets]);

  if (!pet) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <p>Breed: {pet.breed}</p>
      <p>Location: {pet.city}, {pet.state}</p>
      <p>Description: {pet.description}</p>
      <div className="pet-images">
        {pet.images.map((image, index) => (
          <img key={index} src={image} alt={`${pet.name} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};


export default PetDetails;
