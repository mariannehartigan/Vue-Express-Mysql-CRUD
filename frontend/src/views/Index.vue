<template>
  <div class="home">
    <Moods />
    <br />
    <Weather />
  </div>
</template>

<script>
// @ is an alias to /src
import Moods from '@/components/Moods.vue'
import Weather from '@/components/Weather.vue'

export default {
  name: 'Index',
  components: {
    Moods,
    Weather
  }
}
</script>