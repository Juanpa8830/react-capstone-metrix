import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountryList from '../Components/CountryList';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';


const CountriesData = [{
name: 'Colombia',
population: 50000000,
flag: 'https://flagcdn.com/aw.svg',
id: '12345',
}]

describe('Testing page deployment', () => {
  test('Country components matches snapshot', () => {
    const tree = render(
      <BrowserRouter>
      <Provider store={store}>
        <CountryList CountriesData={CountriesData} />
      </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
