import React, {useState} from 'react';
import Weather from "./components/Weather";
import {
  Radio,
} from '../../../styles/app.css';
import CityDropdown from "./components/CityDropdown";
import {useWeatherState} from "./weather-state";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forecast = () => {
  let [unit, setUnit] = useState('imperial');
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  const [
    {forecasts, city},
    {getForecast}
  ] = useWeatherState()

  function handleGetForecast(e) {
    e.preventDefault();
    if (city === '') {
      toast.error('Please select a City', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    getForecast({unit: unit, uriEncodedCity: encodeURIComponent(city)})

  }

  return (

    <div className="flex justify-center h-screen">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="border-t border-gray-200">
        <div className="flex justify-center h-32 space-x-4 grid grid-flow-col auto-cols-max">
          <div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <CityDropdown/>
            </div>
          </div>
          <div className="mt-3">
            <label className={Radio}>
              <input
                type="radio"
                name="units"
                checked={unit === "imperial"}
                value="imperial"
                onChange={(e) => setUnit(e.target.value)}
              />
              Fahrenheit
            </label>
          </div>
          <div className="mt-3">
            <label className={Radio}>
              <input
                type="radio"
                name="units"
                checked={unit === "metric"}
                value="metric"
                onChange={(e) => setUnit(e.target.value)}
              />
              Celcius
            </label>
          </div>
          <div className="mt-1">
            <button onClick={handleGetForecast}
                    className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block">
              Get Forecast
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="font-bold text-xl">
            {(forecasts && forecasts.length > 0) && (
              <>
              {city}
              </>
            )}
          </div>
        </div>
        <div className="h-auto space-x-4 grid grid-flow-col auto-cols-max">
          {(forecasts && forecasts.length > 0) && (
            forecasts.map((forecast) => (
              <Weather {...forecast} unit={(unit === 'imperial') ? '°f' : '°'} key={forecast.dt}/>
            ))
          )}
        </div>
      </div>
    </div>

  );
}

export default Forecast;