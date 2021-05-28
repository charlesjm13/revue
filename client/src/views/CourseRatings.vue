<template lang="html">
  <div class="home-container" style="margin: auto; text-align: center; width: 1000px; border-style: solid;">
    <h1 style="color:darkgrayslate">Course Ratings</h1>
        <div>
    <Dropdown v-model="selectedCollege" :options="colleges" optionLabel="name" placeholder="Select a college" />
    </div>

    <br>
    <br>
    <div>
    <Dropdown v-model="courseField" v-if="selectedCollege != ''" :options="courses" optionLabel="name" placeholder="Select a course field" />
    </div>
    <br>
    <input type="text" placeholder="Course Number..." pattern ="\d*" maxlength="3" minlength="3" v-if="courseField != ''" v-model="courseNumber">
    <div style="margin: auto; text-align:center; padding-top: 10px;">
    <CourseRatings :colleges="colleges" :courseNumber="courseNumber" :courseField="courseField" :selectedCollege="selectedCollege"></CourseRatings>
    </div>
  </div>
  <br>
  <div v-for="rating in ratings" :key="rating.id" :rating="rating" style="margin: auto; text-align: center; padding: 0px 200px 20px 200px; border-style: solid;">
    Reviewed by: {{ rating.username }}
    <br>
    {{ rating.collegename }}
    <br>
    {{rating.coursename}} {{ rating.coursenumber }}
    <br>
    Course Rating: {{ rating.courserating }}
    <br>
    Course Positive: {{rating.coursepositive}} 
    <br>
    Course Negative: {{rating.coursenegative}}
  </div>
</template>

<script>
import CourseRatings from  '@/components/CourseRatings'
import RatingsService from '@/services/RatingsService'

export default {
  name: 'home',
  components: {CourseRatings},
  data() {
    return {
      selectedCollege: '',
      courseField: '',
      courseNumber: '',
      colleges: [
        {name: 'Knox College', code: 'KNOX'}
      ],
      ratings: null,
      courses: [
        {name: 'Africana Studies', code: 'AFST'},
        {name: 'American Studies', code: 'AMER'},
        {name: 'Anthropology and Sociology', code: 'ANSO'},
        {name: 'Art and Art History', code: 'ART'},
        {name: 'Asian Studies', code: 'ASIA'},
        {name: 'Biochemistry', code: 'BIOCHEM'},
        {name: 'Biology', code: 'BIO'},
        {name: 'Business and Management', code: 'BUSI'},
        {name: 'Chemistry', code: 'CHEM'},
        {name: 'Chinese', code: 'CHIN'},
        {name: 'Classics', code: 'CLASS'},
        {name: 'Classics/Greek', code: 'GRE'},
        {name: 'Classics/Latin', code: 'LAT'},
        {name: 'Computer Science', code: 'CS'},
        {name: 'Dance', code: 'DNCE'},
        {name: 'Economics', code: 'ECON'},
        {name: 'Education Studies', code: 'EDU'},
        {name: 'English', code: 'ENG'},
        {name: 'Environmental Studies', code: 'ENVS'},
        {name: 'Film Studies', code: 'FILM'},
        {name: 'French', code: 'FRE'},
        {name: 'Gender and Womens Studies', code: 'WOM'},
        {name: 'German', code: 'GER'},
        {name: 'Health Studies', code: 'HELTH'},
        {name: 'History', code: 'HIST'},
        {name: 'International Studies', code: 'INTL'},
        {name: 'Interdisciplinary', code: 'INTER'},
        {name: 'Japanese', code: 'JAP'},
        {name: 'Latin American Studies', code: 'LATI'},
        {name: 'Mathematics', code: 'MATH'},
        {name: 'Modern Languages', code: 'MODL'},
        {name: 'Music', code: 'MUS'},
        {name: 'Neuroscience', code: 'NEURO'},
        {name: 'Peace and Justice Studies', code: 'PEAC'},
        {name: 'Philosophy', code: 'PHIL'},
        {name: 'Physics and Astronomy', code: 'PHYS'},
        {name: 'Political Science', code: 'POSCI'},
        {name: 'Preceptorial', code: 'PREC'},
        {name: 'Psychology', code: 'PSYC'},
        {name: 'Religious Studies', code: 'RELG'},
        {name: 'Spanish', code: 'SPAN'},
        {name: 'Sports Studies', code: 'SPRT'},
        {name: 'Statistics', code: 'STATS'},
        {name: 'Theatre', code: 'THEAT'}
      ]
    }
  },
   mounted() {
      RatingsService.getCourseRatings().then((response) => {
        this.ratings = response.data;
      });
    }
}
</script>

<style lang="css">
select, input {
  background: #f0ead6;
}
.home-container {
  background: #f0ead6;
}
</style>