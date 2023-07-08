<template>
    <div>
        <span v-for="mood in moods" :key="mood.mood_id">{{ mood.mood_name }}
            <router-link :to="{name: 'UpdateMood', params: {id: mood.mood_id}}">
                Edit
            </router-link>
            <a @click="deleteMood(mood.mood_id)">
            Delete
        </a>
            <br />
        </span>
        <createMood />
    </div>
  </template>
  
  
  <script>
  import axios from "axios"
  import CreateMood from '@/components/CreateMood.vue'
  export default {
    components: {
        CreateMood
    },
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
        },

        async deleteMood(id) {
            try {
                await axios.delete(`http://localhost:5000/moods/${id}`);
                this.getMoods();
            } catch (err) {
                console.log(err);
            }
      }
    }
  }
  </script>
  
  <style>
  a {cursor: pointer}
  </style>
  