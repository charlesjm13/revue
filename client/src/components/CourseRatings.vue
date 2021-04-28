<template lang="html">
  <div class="ratings" style="background: #779FA1; width: 50%; margin:auto;">
    <div>
      <br>
      <div>
        <Stars></Stars>
        <br>
        How would you rate this course?
      </div>
      <br>
      <form>
        <label for="coursePos" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">What did you like most about this course?:</label>
        <input name="coursePos" type="text" v-model="coursePos">
        <br>
        <br>
        <label for="courseNeg" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">What do you think could be improved about this course?:</label>
        <input name="courseNeg" type="text" v-model="courseNeg">
      </form>
      <br>
      <button v-if="this.$props.selectedCollege != ''">Submit A Review</button>
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/Stars'

export default {
    name: 'ratings',
    components: {Stars},
    props: ['selectedCollege'],
    data() {
      return {
        ratingType: '',
        coursePos: '',
        courseNeg: '',
        college: this.$props.selectedCollege
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
