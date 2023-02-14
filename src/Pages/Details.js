import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import leftarrow from '../images/leftarrow.png';

const Details = () => {
  const { name } = useParams(); // se usa para setear la busqueda por nombres en detalles
  const country = useSelector((state) => state.Countries.find((count) => count.name === name));

  return (

    <div className="detailscontainer">
      <div className="Subregion">Subregion</div>
      <p className="dato">{country.subregion}</p>
      <div className="Coordenates">Coordenates</div>
      <p className="dato2">
        {country.coordenates.lat}
        ,
        {country.coordenates.long}
      </p>
      <div className="Population">Population</div>
      <p className="dato3">
        {country.population}
        {' '}
        habs
      </p>

      <div className="Car-side">Car-side</div>
      <p className="dato4">{country.carside}</p>

      <div className="Start-of-week">Start of week</div>
      <p className="dato-5">{country.soweek}</p>
      <div className="capital">Capital</div>
      <p className="dato-6">{country.capital}</p>
      <div className="Coat-of-Arms">Coat of Arms</div>
      <div className="img-escudo" id="flex">
        <img
          src={country.coarms}
          width="200px"
          height="200px"
          alt="coatofarms"
        />
        <Link to="/" className="arrow-back">
          <button type="button">
            <img
              className="arrowback"
              src={leftarrow}
              alt="back-home"
              width="50px"
              height="50px"
            />
          </button>
        </Link>

      </div>
    </div>

  );
};

export default Details;
