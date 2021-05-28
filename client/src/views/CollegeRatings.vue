<template lang="html">
  <div class="home-container" style="margin: auto; text-align: center; padding: 0px 200px 150px 200px; border-style: solid;">
    <h1 style="color:darkslategray">College Ratings</h1>
    <div>

    <Dropdown v-model="selectedCollege" :options="colleges" optionLabel="name" placeholder="Select a college" />
    </div>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
      <CollegeRatings :selectedCollege="selectedCollege"></CollegeRatings>
    </div>
  </div>
  <br>
  <div v-for="rating in ratings" :key="rating.id" :rating="rating" style="margin: auto; text-align: center; padding: 0px 200px 20px 200px; border-style: solid;">
    Reviewed by: {{ rating.username }}
    <br>
    {{ rating.collegename }}
    <br>
    Academics: {{ rating.academics }}
    <br>
    Athletics: {{ rating.athletics }}
    <br>
    Dorms: {{ rating.dorms }}
    <br>
    Dining: {{ rating.dining }}
  </div>
</template>

<script>
import CollegeRatings from  '@/components/CollegeRatings'
import RatingsService from '@/services/RatingsService'

export default {
  name: 'home',
  components: {CollegeRatings},
  data() {
    return {
      selectedCollege: '',
      ratings: null,
      colleges: [
        {name: 'Knox College', code: 'KNOX'}
      ]
    }
  },
  
    mounted() {
      RatingsService.getCollegeRatings().then((response) => {
        this.ratings = response.data;
      });
    }
}
</script>