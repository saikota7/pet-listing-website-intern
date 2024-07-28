import React, { useContext } from 'react';
import { PetsContext } from '../services/PetsContext';
import PetListItem from './PetListItem';

const PetList = () => {
  const { searchResults } = useContext(PetsContext);

  if (!searchResults || searchResults.length === 0) {
    return <p>No pets available</p>;
  }

  return (
    <div className="pet-list">
      {searchResults.map(pet => (
        <PetListItem key={pet.id} pet={pet} />
      ))}
    </div>
  );
};

export default PetList;
