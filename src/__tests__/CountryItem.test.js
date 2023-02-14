import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountryItem from '../Components/CountryItem';
import '@testing-library/jest-dom';
import store from '../Redux/ConfigureStore';

const Country = {
  name: 'Colombia',
  population: 50000000,
  flag: 'https://flagcdn.com/aw.svg',
};

describe('Testing page deployment', () => {
  test('Country components matches snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <CountryItem
            name={Country.name}
            population={Country.population}
            flag={Country.flag}
          />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
