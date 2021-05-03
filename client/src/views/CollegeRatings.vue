<template lang="html">
  <div class="home-container" style="margin: auto; text-align: center; padding: 0px 200px 150px 200px;">
    <h1 style="color:white">College Ratings</h1>
    <div>
    <select v-model="selectedCollege">
      <option value="" disabled selected>Select A School</option>
      <option value="Knox College">Knox College</option>
    </select>
    </div>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <CollegeRatings :selectedCollege="selectedCollege"></CollegeRatings>
    </div>
  </div>
</template>

<script>
import CollegeRatings from  '@/components/CollegeRatings'

export default {
  name: 'home',
  components: {CollegeRatings},
  data() {
    return {
      selectedCollege: ''
    }
  }
}
</script>
