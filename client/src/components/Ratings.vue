<template lang="html">
  <div class="ratings" style="background: #779FA1; width: 50%; margin:auto;">
    <div>
      <form>
        <select v-model="ratingType">
          <option value="" disabled selected>Select A Rating Type</option>
          <option>Course Rating</option>
          <option>College Rating</option>
        </select>
        <br>
      </form>
      <Stars></Stars>
      <form>
        <label for="coursePos" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">What did you like most about this course?:</label>
        <input name="coursePos" type="text" v-model="coursePos">
      </form>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/Stars'

export default {
    name: 'ratings',
    components: {Stars},
    data() {
      return {
        ratingType: '',
        coursePos: ''  
      } 
    }
}
</script>

<style>
input{
  background: #FAF7F2;
}
select {
  background: #FAF7F2;
}

</style>
