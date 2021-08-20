import types from "../../types";
import moment from "moment"
import authHeader from "../../../../../helpers/authHeader";

async function getForecast(dispatch, payload) {
  // Default Values
  fetch(`${process.env.MIX_APP_API_URL}/forecast/daily?units=${payload.unit}&q=${payload.uriEncodedCity}`, {
    "method": "GET",
    "headers": authHeader()
  })
    .then(response => response.json())
    .then(response => {
      if (response.cod !== "200") {
        throw new Error()
      }
      let list = response.list;
      let forecasts = [];
      let city = response.city.name;

      list.map((data) => {

        let tempDate = moment(new Date(data.dt * 1000)).format('MMM DD YYYY');
        let icon = `${process.env.MIX_APP_ICON_URL}/${data.weather[0].icon}.png`
        forecasts.push({
          dt: data.dt,
          icon: icon,
          city: city,
          date: tempDate,
          tempLow: data.temp.min,
          tempHigh: data.temp.max,
          temp: data.temp.day,
          weather: data.weather[0].main,
          humidity: data.humidity,
          likeMorn: data.feels_like.morn,
          likeDay: data.feels_like.day,
          likeNight: data.feels_like.night
        })
      })
      dispatch({type: types.FORECASTS, payload:forecasts})

    }).catch(err => {
      console.log(err);
    });
}

export default getForecast