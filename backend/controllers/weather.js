import {
    getWeather
  } from "../models/WeatherModel.js";
  
  export const showWeather = (req, res) => {
    getWeather((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  