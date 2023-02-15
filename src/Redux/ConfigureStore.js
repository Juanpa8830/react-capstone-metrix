import { configureStore } from '@reduxjs/toolkit'; // ya trae la config del combine reducer y del createStore

import CountriesReducer from './CountriesReducer';

const rootReducer = {
  Countries: CountriesReducer,
};

const store = configureStore({ reducer: rootReducer });// la nueva sintaxis de configureStore

export default store;
