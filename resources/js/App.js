import React from 'react';
import ReactDOM from 'react-dom';
import {WeatherStateProvider} from "./pages/Weather/weather-state";
import Forecast from "./pages/Weather/Forecast";

function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-gray shadow overflow-hidden sm:rounded-lg">
        <WeatherStateProvider>
          <Forecast/>
        </WeatherStateProvider>
      </div>
    </div>
  )
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

