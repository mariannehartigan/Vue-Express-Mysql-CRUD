<template>
    <div>
        <div>
            <label>Change Mood Name</label>
      <div>
            <input
                type="text"
                placeholder="Mood Name"
                v-model="moodName"
            />
      </div>
    </div>

    <div>
        <button @click="updateMood">UPDATE</button>
    </div>

    </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      moodName: ""
    };
  },
  created: function () {
    this.getMoodById();
  },
  methods: {
    async getMoodById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/moods/${this.$route.params.id}`
        );
        this.moodName = response.data.mood_name
      } catch (err) {
        console.log(err);
      }
    },
    async updateMood() {
      try {
        await axios.put(
          `http://localhost:5000/moods/${this.$route.params.id}`,
          {
            mood_name: this.moodName
          }
        );
        (this.moodName = "")
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};

</script>


<style scoped>


</style>