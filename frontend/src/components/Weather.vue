<template>
    <div>
        <span v-for="weather in weatherList" :key="weather.weather_id">{{ weather.weather_name }} <br /></span>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    data() {
        return {
            weatherList: [],
        }
    },
    created() {
        this.getWeather();
    },
    methods: {
        async getWeather() {
            try {
                const response = await axios.get("http://localhost:5000/weather")
                this.weatherList = response.data
            } catch (err) {
                console.log(err)
            }
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  