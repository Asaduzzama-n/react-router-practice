import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Main from './Layout/Main';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'home',
          element: <Home></Home>
        },
        {
          path:'countries',
          loader:async ()=>{
            return fetch('https://restcountries.com/v3.1/all')
          },
          element:<Countries></Countries>
        },
        {
          path:'about',
          element:<About></About>
        },
        {
          path:'countryDetails/:countryCode',
          loader:async({params})=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
          },
          element:<CountryDetails></CountryDetails>
        }
      ]
    },



  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
