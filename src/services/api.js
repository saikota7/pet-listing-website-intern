import axios from 'axios';

// Base URL for the API
const API_BASE_URL = 'http://pets-v2.dev-apis.com';

// Create an axios instance for API requests
const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch the list of pets
export const fetchPets = async () => {
  try {
    const response = await apiClient.get('/pets');
    return response.data; // Ensure this contains image URLs and other pet data
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error; // Rethrow to be handled by components
  }
};

// Fetch a pet by its ID
export const fetchPetById = async (id) => {
  try {
    const response = await apiClient.get('/pets', { params: { id } });
    return response.data;
  } catch (error) {
    console.error('Error fetching pet by ID:', error);
    throw error; // Rethrow to be handled by components
  }
};

// Fetch breeds by animal type
export const fetchBreedsByAnimal = async (animal) => {
  try {
    const response = await apiClient.get('/breeds', { params: { animal } });
    return response.data;
  } catch (error) {
    console.error('Error fetching breeds by animal:', error);
    throw error; // Rethrow to be handled by components
  }
};

// Search for pets based on animal type, location, and breed
export const searchPets = async (animal, location, breed) => {
  try {
    const response = await apiClient.get('/pets', { params: { animal, location, breed } });
    return response.data;
  } catch (error) {
    console.error('Error searching pets:', error);
    throw error; // Rethrow to be handled by components
  }
};
