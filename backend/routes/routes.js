import express from "express";

import {
  getMoods
} from "../controllers/mood.js";

import {
  showWeather
} from "../controllers/weather.js";

const router = express.Router();

router.get("/moods", getMoods);
router.get("/weather", showWeather);

export default router;