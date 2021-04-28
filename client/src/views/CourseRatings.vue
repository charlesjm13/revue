<template lang="html">
  <div class="home container" style="margin: auto; text-align: center;">
    <h1>Course Ratings</h1>
    <select v-model="selectedCollege">
      <option value="" disabled selected>Select A School</option>
      <option value="Knox College">Knox College</option>
    </select>
    <br>
    <br>
    <select v-model="courseField" v-if="selectedCollege != ''">
       <input type="text" placeholder="Search.." onkeyup="filterFunction()">
      <option value="" disabled selected>Select A Course Field</option>
      <option value="Africana Studies">Africana Studies</option>
      <option value="American Studies">American Studies</option>
      <option value="Anthropology and Sociology">Anthropology and Sociology</option>
      <option value="Art and Art History">Art and Art History</option>
      <option value="Asian Studies">Asian Studies</option>
      <option value="Biochemistry">Biochemistry</option>
      <option value="Biology">Biology</option>
      <option value="Business and Management">Business and Management</option>
      <option value="Chemistry">Chemistry</option>
      <option value="Chinese">Chinese</option>
      <option value="Classics">Classics</option>
      <option value="Classics/Greek">Classics/Greek</option>
      <option value="Classics/Latin">Classics/Latin</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Dance">Dance</option>
      <option value="Economics">Economics</option>
      <option value="Educational Studies">Educational Studies</option>
      <option value="English">English</option>
      <option value="Environmental Studies">Environmental Studies</option>
      <option value="Film Studies">Film Studies</option>
      <option value="French">French</option>
      <option value="Gender and Women's Studies">Gender and Women's Studies</option>
      <option value="German">German</option>
      <option value="Health Studies">Health Studies</option>
      <option value="History">History</option>
      <option value="International Studies">International Studies</option>
      <option value="Interdisciplinary">Interdisciplinary</option>
      <option value="Japanese">Japanese</option>
      <option value="Latin American Studies">Latin American Studies</option>
      <option value="Mathematics">Mathematics</option>
      <option value="Modern Languages">Modern Languages</option>
      <option value="Music">Music</option>
      <option value="Neuroscience">Neuroscience</option>
      <option value="Peace and Justice Studies">Peace and Justice Studies</option>
      <option value="Philosophy">Philosophy</option>
      <option value="Physics and Astronomy">Physics and Astronomy</option>
      <option value="Political Science">Political Science</option>
      <option value="Preceptorial">Preceptorial</option>
      <option value="Psychology">Psychology</option>
      <option value="Religious Studies">Religious Studies</option>
      <option value="Spanish">Spanish</option>
      <option value="Sports Studies">Sports Studies</option>
      <option value="Statistics">Statistics</option>
      <option value="Theatre">Theatre</option>
    </select>
    <div style="margin: auto; text-align:center; padding-top: 20px;">
    <CourseRatings :selectedCollege="selectedCollege"></CourseRatings>
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
      courseField: ''
    }
  }
}
</script>

<style lang="css">
select {
  background: #FAF7F2;
}
</style>