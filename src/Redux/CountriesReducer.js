import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const GET_DATA = 'GET_DATA';
const countriesUrl = 'https://restcountries.com/v3.1/region/ame';

const CountriesReducer = (state = [], action) => {
  switch (action.type) {
    case `${GET_DATA}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const getApiCountries = createAsyncThunk(GET_DATA,
  () => axios.get(countriesUrl).then((response) => {
    const CountriesObj = (response.data).map((country) => (
      {
        name: country.name.common,
        population: country.population,
        flag: country.flags.svg,
        id: uuidv4(),
        subregion: country.subregion,
        coordenates: {
          lat: country.latlng[0],
          long: country.latlng[1],
        },
        carside: country.car.side,
        soweek: country.startOfWeek,
        capital: country.capital[0],
        coarms: country.coatOfArms.svg,
      }
    ));

    return CountriesObj;
  }));

export default CountriesReducer;
