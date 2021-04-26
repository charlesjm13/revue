<template lang="html">
<<<<<<< HEAD
  <div class="home container" style="margin: auto; text-align: center;">
    <h1>College Ratings</h1>
    <div>
    <select>
      <option value="" disabled selected>Select A School</option>
=======
  <div class="home container" style="background: #779FA1">
    <h1 style="color:#212c2e">College Ratings</h1>
    <div>
    <select>
      <option>Select A School</option>Welcome to BECS, the #1 desitnation for college information
>>>>>>> shahm
      <option>Knox College</option>
    </select>
    </div>
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
  background: #212c2e;
}
</style>