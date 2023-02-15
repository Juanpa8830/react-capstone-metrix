import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryItem = (props) => {
  const { name, flag, population } = props;

  return (
    <Link to={`details/${name}`} className="text">
      <div className="card" id="flex">
        <img src={flag} alt="flag" width="180px" height="130px" />
        <div className="info">
          <h2 className="card-name">{name}</h2>
          <p className="card-p">
            Population:
            {' '}
            {population}
            {' '}
            habs
          </p>
        </div>
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
