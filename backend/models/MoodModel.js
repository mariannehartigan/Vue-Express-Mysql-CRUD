import db from "../config/database.js";


export const mCreateMood = (data, result) => {
  db.query("INSERT INTO mood SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const mGetMoods = (result) => {
  db.query("SELECT * FROM mood", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const mUpdateMood = (data, id, result) => {
  db.query(
    "UPDATE mood SET mood_name = ? WHERE mood_id = ?",
    [data.mood_name, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const mDeleteMood = (id, result) => {
  db.query("DELETE FROM mood WHERE mood_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
