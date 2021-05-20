<template lang="html">
  <div class="home-container" style="margin: auto; text-align: center; padding: 0px 200px 150px 200px;">
    <h1 style="color:darkslategray">College Ratings</h1>
    <div>

    <Dropdown v-model="selectedCollege" :options="colleges" optionLabel="name" placeholder="Select a college" />
    </div>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <CollegeRatings :selectedCollege="selectedCollege"></CollegeRatings>
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
      selectedCollege: '',
      colleges: [
        {name: 'Knox College', code: 'KNOX'}
      ]
    }
  }
}
</script>