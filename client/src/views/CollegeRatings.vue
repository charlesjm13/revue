<template lang="html">
  <div class="home container" style="margin: auto; text-align: center;">
    <h1>College Ratings</h1>
    <div>
    <select>
      <option value="" disabled selected>Select A School</option>
      <option>Knox College</option>
    </select>
    </div>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <CollegeRatings></CollegeRatings>
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
    }
  }
}
</script>

<style lang="css">
select {
  background: #564154;
}
</style>