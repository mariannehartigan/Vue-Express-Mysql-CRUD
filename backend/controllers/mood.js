import {
    mGetMoods
  } from "../models/MoodModel.js";
  
  export const getMoods = (req, res) => {
    mGetMoods((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
  };
  