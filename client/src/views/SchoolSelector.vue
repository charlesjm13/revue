<template>
  <div class="school-selector">
    <h1> SchoolSelector</h1>
    <li v-for="knox in schools" :key="knox.id" :knox="knox">
      {{knox.id}}
    </li>

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
       metadata: null,
       schools: null
     }
   },
  methods:{

    getCollegeData(){
      var baby = this;
       CollegeService.index().then((response) => {
       baby.schools = response.data.results;
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
.school-selector {
   width: 1300px;
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
