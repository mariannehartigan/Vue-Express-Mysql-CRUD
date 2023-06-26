import db from "../config/database.js";

export const getWeather = (result) => {
  db.query("SELECT * FROM weather", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
