import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const country = useLoaderData()[0];
    // console.log(country);
    return (
        <div>
            <h1>Country Name: {country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            <h3>Capital: {country.capital}</h3>
            <h4>Area: {country.area}skm</h4>
            <h5>Continent: {country.continents}</h5>
            
        </div>
    );
};

export default CountryDetails;