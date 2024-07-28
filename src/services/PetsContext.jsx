import React, { createContext, useState, useEffect } from 'react';
import { fetchPets } from './api';

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets();
        setPets(data.pets || []);
        setSearchResults(data.pets || []);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };
    getPets();
  }, []);

  return (
    <PetsContext.Provider value={{ pets, searchResults, setSearchResults }}>
      {children}
    </PetsContext.Provider>
  );
};
