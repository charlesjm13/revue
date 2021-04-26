<template lang="html">
  <div class="home container" style="margin: auto; text-align: center;">
    <h1>Course Ratings</h1>
    <select>
      <option value="" disabled selected>Select A School</option>
      <option>Knox College</option>
    </select>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <Ratings></Ratings>
    </div>
  </div>
</template>

<script>
import Ratings from  '@/components/Ratings'

export default {
  name: 'home',
  components: {Ratings},
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