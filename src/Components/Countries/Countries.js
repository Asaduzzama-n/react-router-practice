import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';
import Header from '../Header/Header';

const Countries = () => {
    const countries = useLoaderData();

    return (
        <div>

            <h1>Total Country: {countries.length}</h1>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;