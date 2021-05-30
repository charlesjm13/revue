<template lang="html">
  <div class="ratings" style="background: #f8dbd5; margin:auto;">
    <div>
      <br>
      <div>
        <Stars @clicked="updateStars"></Stars>
        <br>
        How would you rate this course?
      </div>
      <br>
      <form>
        <label for="coursePos" style="padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">What did you like most about this course?:</label>
        <input name="coursePos" type="text" v-model="coursePos">
        <br>
        <br>
        <label for="courseNeg" style="padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">What do you think could be improved about this course?:</label>
        <input name="courseNeg" type="text" v-model="courseNeg">
      </form>
      <br>
      <Button v-if="this.$props.courseNumber.length == 3 
                    && this.courseRating != 0 
                    && this.coursePos != '' 
                    && this.courseNeg != ''"
                    v-on:click="reviewSubmitted = true; createRating()"
                    >
                      Submit A Review</button>
      <br>
      <br>
      <div v-if="reviewSubmitted">
        <h2>
          Ratings
        </h2>
        <div>
          College Name: {{ this.$props.selectedCollege.name }}
        </div>
        <div>
          Course: {{ this.$props.courseField.name  }} {{ this.$props.courseNumber }}
        </div>
        <div v-if="this.courseRating==1">
          Course Rating: {{ this.courseRating  }} Star
        </div>
        <div v-if="this.courseRating!=1">
          Course Rating: {{ this.courseRating  }} Stars
        </div>
        <div>
          What did you like most about this course?
        </div>
        <div>
          {{ this.coursePos }}
        </div>
        <div>
          What do you think could be improved about this course?
        </div>
        <div>
          {{ this.courseNeg }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Stars from '@/components/Stars'
import RatingsService from '@/services/RatingsService'

export default {
    name: 'ratings',
    components: {Stars},
    props: ['courseNumber', 'courseField', 'selectedCollege'],
    data() {
      return {
        coursePos: '',
        courseNeg: '',
        cNumber: this.$props.courseNumber,
        courseRating: '',
        reviewSubmitted: false,
        ratings: null,
      } 
    },
    methods: {
      updateStars (stars) {
        this.courseRating = stars;
      },
      createRating() {
          RatingsService.createCourseRatings({
            collegename: this.$props.selectedCollege.name,
            coursename: this.$props.courseField.name,
            coursenumber: this.$props.courseNumber,
            courserating: this.courseRating,
            coursepositive: this.coursePos,
            coursenegative: this.courseNeg,
            username: this.$store.state.user.username
          })
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            this.error = e.response.data.error;
          })
        }
  },
}
</script>

<style>

.ratings form{
  max-width: 700px;
    margin: 30px auto;
    overflow: auto;
    min-height:200px;
    border: 3px solid green;
    padding: 20px;
    border-radius: 7px;
    text-align:  left;

}
input{
  background: #FAF7F2;
}
select {
  background: #FAF7F2;
}

</style>
