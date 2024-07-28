import React, { useState, useContext } from 'react';
import { PetsContext } from '../services/PetsContext';

const SearchForm = () => {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');
  const { setSearchResults } = useContext(PetsContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
      const data = await response.json();
      setSearchResults(data.pets || []);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
        placeholder="Animal (e.g., dog)"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (e.g. city, state)"
      />
      <input
        type="text"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
        placeholder="Breed"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
