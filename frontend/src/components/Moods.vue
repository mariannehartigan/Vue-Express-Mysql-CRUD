<template>
    <div>
        <span v-for="mood in moods" :key="mood.mood_id">{{ mood.mood_name }}<br /></span>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  export default {
    data() {
        return {
            moods: [],
        }
    },
    created() {
        this.getMoods();
    },
    methods: {
        async getMoods() {
            try {
                const response = await axios.get("http://localhost:5000/moods")
                this.moods = response.data
            } catch (err) {
                console.log(err)
            }
        }
    }
  }
  </script>
  
  <style>
  
  </style>
  