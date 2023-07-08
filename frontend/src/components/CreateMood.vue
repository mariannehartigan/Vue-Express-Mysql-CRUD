<template>
	<div>
        <br />
        <input type="text" placeholder="Add new mood" v-model="mood" />
        <button @click="createMood">+</button>
	</div>
</template>

<script>
import axios from "axios"
export default {
    name: 'CreateMood',
    data() {
        return {
            mood: ""
        };
    },
    methods: {
        async createMood() {
            try {
                await axios.post("http://localhost:5000/moods", {
                  mood_name: this.mood
                });
                (this.mood = "");
                this.$router.push("/");
            } catch (err) {
            console.log(err);
            }
        }
    }
}

</script>
