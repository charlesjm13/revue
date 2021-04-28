<template lang="html">
  <div class="ratings" style="background: #779FA1; width: 100%; margin:auto;">
    <div>
        <div>
            <Stars></Stars> 
            Academics
        </div>
        <div>
            <Stars></Stars> 
            Athletics
        </div>
        <div>
            <Stars></Stars> 
            Dorms
        </div>
        <div>
            <Stars></Stars> 
            Dining Services
        </div>
        <br>
        <button v-if="this.$props.selectedCollege != ''">Submit A Review</button>
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
