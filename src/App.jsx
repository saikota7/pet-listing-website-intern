import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PetDetailsPage from './pages/PetDetailsPage';
import { PetsProvider } from './services/PetsContext'; // Ensure this path is correct
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css'; // Import CSS file here

const App = () => {
  return (
    <PetsProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pet/:id" element={<PetDetailsPage />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </PetsProvider>
  );
};

export default App;
