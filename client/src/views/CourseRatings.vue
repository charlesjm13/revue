<template lang="html">
  <div class="home-container" style="margin: auto; text-align: center; width: 1000px;">
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
    <CourseRatings :courseNumber="courseNumber" :courseField="courseField" :selectedCollege="selectedCollege"></CourseRatings>
    </div>
  </div>
</template>

<script>
import CourseRatings from  '@/components/CourseRatings'

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
  }
}
</script>

<style lang="css">
select, input {
  background: #f8dbd5;
}
.home-container {
  background: #f8dbd5;
}
</style>