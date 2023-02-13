import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryItem = (props) => {
  const { name, flag, population } = props;

  return (
    <Link to={`details/${name}`} className="">
      <div className="img-container">
        <img src={flag} alt="flag" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{population}</p>
      </div>
    </Link>
  );
};

export default CountryItem;

CountryItem.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
};
