import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getApiCountries } from '../Redux/CountriesReducer';
import CountryList from '../Components/CountryList';
import store from '../Redux/ConfigureStore';
import mic from '../images/mic.png';
import config from '../images/gear.png';

let flag = false;
const Home = () => {
  const [data, setData] = useState('');
  const countries = useSelector((state) => state.Countries);

  useEffect(() => {
    if (!flag) {
      store.dispatch(getApiCountries());
      flag = true;
    }
  }, []);

  const onChange = (event) => {
    setData(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home-page">
      <div className="header" id="flex">
        <h1 className="main-title">AMERICA&apos;S POPULATION</h1>
        <div className="form-section" id="flex">
          <form className="input-search">
            <input
              onSubmit={onSubmit}
              className="find-item"
              type="search"
              onChange={onChange}
              placeholder=" find your american country"
            />
          </form>
          <div className="icons" id="flex">
            <img src={mic} alt="mic" className="icon" />
            <img src={config} alt="config" className="icon" />
          </div>
        </div>
      </div>

      <CountryList
        CountriesData={countries.filter((country) => (
          data.toLowerCase() === '' ? country : country.name.toLowerCase().includes(data)
        ))}
      />

    </div>

  );
};

export default Home;
