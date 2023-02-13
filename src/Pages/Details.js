import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import leftarrow from '../images/leftarrow.png';

const Details = () => {
  const { name } = useParams(); // se usa para setear la busqueda por nombres en detalles
  const country = useSelector((state) => state.Countries.find((count) => count.name === name));
console.log(country);
  return (

    <div className="details">
      <Link to="/" className="arrow-back">
        <button type="button"><img src={leftarrow} alt="back-home" /></button>
      </Link>
      <h1 className="details-title">{`${country.name}`}</h1>
    </div>
  );
};

export default Details;
