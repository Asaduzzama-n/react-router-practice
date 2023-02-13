import React from 'react';
import { Link, useLoaderData, useNavigate, useRouteLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import './Country.css'
const Country = ({country}) => {
    const navigate = useNavigate();
    const handleNavigate =()=>{
        navigate(`/countryDetails/${country.cca3}`)
    }
    return (
        <div className='country'>
                <h3>Name: {country.name.official}</h3>
                <h5>Country:{country.population}</h5>
                <Link to={`/countryDetails/${country.cca3}`}>Show Details</Link>
                <button onClick={handleNavigate}>Show Details</button>
                <Link to={`/countryDetails/${country.cca3}`}><button>Show Details2</button></Link>

        </div>
    );
};

export default Country;