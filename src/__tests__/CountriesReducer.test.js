import CountriesReducer from '../Redux/CountriesReducer';

const CountryData = {
  name: 'Aruba',
  population: 106766,
  flag: 'https://flagcdn.com/aw.svg',
  id: 'e115687c-660f-48e8-8da0-bf9809a9140c',
  subregion: 'Caribbean',
  coordenates: {
    lat: 12.5,
    long: -69.96666666,
  },
  carside: 'right',
  soweek: 'monday',
  capital: 'Oranjestad',
  coarms: 'https://mainfacts.com/media/images/coats_of_arms/aw.svg',
};

test('test Countries Reducer', () => {
  const state = CountriesReducer(undefined, {});
  expect(state).toEqual([]);
});

test('test Countries Reducer', () => {
  const state = CountriesReducer([], {
    type: 'GET_DATA/fulfilled',
    payload: [
      CountryData],
  });
  expect(state).toEqual([CountryData]);
});
