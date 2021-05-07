<template lang="html">
  <div class="ratings" style="background: #f0ead6; width: 100%; margin:auto;">
    <div>
        <div>
            <Stars @clicked="updateAcademicsStars"></Stars> 
            Academics
        </div>
        <div>
            <Stars @clicked="updateAthleticsStars"></Stars> 
            Athletics
        </div>
        <div>
            <Stars @clicked="updateDormsStars"></Stars> 
            Dorms
        </div>
        <div>
            <Stars @clicked="updateDiningStars"></Stars> 
            Dining Services
        </div>
        <br>
        <Button v-if="this.$props.selectedCollege != ''
                      && this.academicStars!=0
                      && this.athleticsStars!=0
                      && this.dormsStars!=0
                      && this.diningStars!=0"
                      v-on:click="reviewSubmitted=true">
                      Submit A Review</Button>
    </div>
  </div>
  <div v-if="reviewSubmitted">
        <h2 style="color:">
          Ratings
        </h2>
        <div>
          College Name: {{ this.$props.selectedCollege.name }}
        </div>
        <div v-if="this.academicStars==1">
          Academics: {{ this.academicStars  }} Star
        </div>
        <div v-if="this.academicStars!=1">
          Academics: {{ this.academicStars  }} Stars
        </div>
        <div v-if="this.athleticsStars==1">
          Athletics: {{ this.athleticsStars  }} Star
        </div>
        <div v-if="this.athleticsStars!=1">
          Athletics: {{ this.athleticsStars  }} Stars
        </div>
        <div v-if="this.dormsStars==1">
          Dorms: {{ this.dormsStars  }} Star
        </div>
        <div v-if="this.dormsStars!=1">
          Dorms: {{ this.dormsStars  }} Stars
        </div>
        <div v-if="this.diningStars==1">
          Dining Services: {{ this.diningStars  }} Star
        </div>
        <div v-if="this.diningStars!=1">
          Dining Services: {{ this.diningStars  }} Stars
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
        academicStars: '',
        athleticsStars: '',
        dormsStars: '',
        diningStars: '',
        reviewSubmitted: false
      }
    },
    methods: {
      updateAcademicsStars(stars){
        this.academicStars=stars;
      },
      updateAthleticsStars(stars){
        this.athleticsStars=stars;
      },
      updateDormsStars(stars){
        this.dormsStars=stars;
      },
      updateDiningStars(stars){
        this.diningStars=stars;
      }
    }
}
</script>

