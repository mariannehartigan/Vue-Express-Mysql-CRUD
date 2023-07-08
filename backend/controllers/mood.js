import {
  mCreateMood, mGetMoods, mUpdateMood, mDeleteMood
} from "../models/MoodModel.js";


export const createMood = (req, res) => {
  const data = req.body;
  mCreateMood(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const getMoods = (req, res) => {
  mGetMoods((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateMood = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  mUpdateMood(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteMood = (req, res) => {
  const id = req.params.id;
  mDeleteMood(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
