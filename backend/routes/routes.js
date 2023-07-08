import express from "express";

import {
  createMood, getMoods, updateMood, deleteMood
} from "../controllers/mood.js";

import {
  showWeather
} from "../controllers/weather.js";

const router = express.Router();

router.post("/moods", createMood);
router.get("/moods", getMoods);
router.put("/moods/:id", updateMood);
router.delete("/moods/:id", deleteMood);

router.get("/weather", showWeather);

export default router;