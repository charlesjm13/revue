<template lang="html">
  <div class="home container" style="background: #779FA1;">
    <h1>Course Ratings</h1>
    <select>
      <option>Select A School</option>
      <option>Knox College</option>
    </select>
    <div style="margin: auto; text-align:center;">
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
  background: #faf7f2;
}
</style>