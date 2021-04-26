<template lang="html">
  <div class="home container" style="margin: auto; text-align: center;">
    <h1>Course Ratings</h1>
    <select>
      <option value="" disabled selected>Select A School</option>
      <option>Knox College</option>
    </select>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <CourseRatings></CourseRatings>
    </div>
  </div>
</template>

<script>
import CourseRatings from  '@/components/CourseRatings'

export default {
  name: 'home',
  components: {CourseRatings},
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