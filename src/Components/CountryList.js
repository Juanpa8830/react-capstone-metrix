import React from 'react';
import PropTypes, { shape } from 'prop-types';
import CountryItem from './CountryItem';

const CountryList = (props) => {
  const { CountriesData } = props;
  return (
    <div className="countriesgroup">
      {CountriesData.map((country) => {
        const {
          name, id, population, flag,
        } = country;
        return (
          <CountryItem
            key={id}
            name={name}
            population={population}
            flag={flag}
          />
        );
      })}
    </div>
  );
};

export default CountryList;

CountryList.propTypes = {
  CountriesData: PropTypes.arrayOf(shape).isRequired,
};
