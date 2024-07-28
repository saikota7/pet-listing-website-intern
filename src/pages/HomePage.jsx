import React from 'react';
import PetList from '../components/PetList';
import SearchForm from '../components/SearchForm';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Pet Listing Website</h1>
      <SearchForm /><br/>
      <PetList />
    </div>
  );
};

export default HomePage;
