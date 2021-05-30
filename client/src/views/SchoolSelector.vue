<template>
  <div class="school-selector">
    <h1> SchoolSelector</h1>
    <li v-for="knox in schools" :key="knox.id" :knox="knox">
      <h2>{{knox["school.name"]}}</h2>
      <p>State: {{knox["school.state"]}}</p>
      <p>City: {{knox["school.city"]}}</p>
      <p>Official Website: {{knox["school.school_url"]}}</p>
    </li>
    <h3 style="color:black"> All college information obtained from the US Department of Education's College Scorecard API.</h3>
    <a href="https://collegescorecard.ed.gov/data/documentation/"> Link to API documentation </a>
  </div>
</template>

<script>
//import SchoolPreview from "@/components/SchoolPreview";
import CollegeService from "@/services/CollegeService"

export default {
  name: "SchoolSelector",
 components: {  },
 data() {
     return {
       schools: null
       
     }
   },
  methods:{

    getCollegeData(){
      var dude = this;
       CollegeService.index().then((response) => {
       dude.schools = JSON.parse(JSON.stringify(response.data.results));
     }).catch(e => {
       console.log(e);
     });

    } 

  },

   mounted() {
    
     this.getCollegeData();
   },
};


</script>

<style scoped lang="css">

.school-selector{
    max-width: 700px;
    margin: 30px auto;
    overflow: auto;
    min-height:400px;
    border: 3px solid green;
    padding: 20px;
    border-radius: 7px;
    text-align:  center;
  }

.home-container {
   height: 250px;
    margin-bottom: 25px;
    display: block;
    color: blue;
    display: grid;
    grid-template-columns: 3fr 1fr 15fr;
}

.port-items-wrapper{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.port-item-wrapper{
  position: relative;
}
.port-img-background{
  height: 300px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

 .img-text-wrapper {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding-left: 100px;
  padding-right: 100px;
}

.img-text-wrapper .subtitle {
  transition: 1s;
  font-weight: 600;
  color: transparent;
}
.img-text-wrapper:hover .subtitle {
  font-weight: 600;
  color: lightseagreen;
}

.img-darken {
  transition: 1s;
  filter: brightness(10%);
}

textarea {
  width: 100%;
  border: none;
  font-family: tahoma;
  font-size: 14px;
  height: 60px;
}

#post-button {
  float: right;
  background-color: #88498f;
  border: none;
  color: white;
  padding: 4px;
  font-size: 14px;
  border-radius: 2px;
  width: 50px;

}
</style>
