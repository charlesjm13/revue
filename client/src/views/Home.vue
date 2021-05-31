<template lang="html">

  <div class="home-container">
    <div class="container">
    <div class = "txtcenter" style="text-align:center;">
      <h1>WELCOME TO BECS!</h1>    
      <h2>To know your place better</h2>
    </div>
    <Welcome v-if="!$store.state.isUserLoggedIn"/>
    <div class = "idk" style="padding-top: 20px;">
      <!-- <img  src= "./assets/image3.jpg" width="800" height="400"> -->
      </div>
       
    <div class="card card1">
      <h5> Experience </h5>
      <p> Experience your choice</p>
    </div>
    <div class="card card2">
      <h5> Explore </h5>
      <p> Explore your ineterests</p>
    </div>
    <div class="card card3">
      <h5> Discover </h5>
      <p> Discover your talent</p>
    </div>
    
    <div class="text">
      <h4> BECS helps you explore your univeristy or college choices! All you have to do is signup to ask more question or answer questions, see the college ratings and learn about your college! </h4>
      </div>

    <div class="slider">
     <div class="slides">
       <input type="radio" name="radio-btn" id="radio1">
       <input type="radio" name="radio-btn" id="radio2">
       <input type="radio" name="radio-btn" id="radio3">

       <div class="slide first">
         <img src="./assets/img1.jpg" alt="" width="800" height="400">
         </div>

       <div class="slide">
         <img src="./assets/img2.jpg" alt="" width="450" height="400">
         </div>

        <div class="slide">
         <img src="./assets/img4.jpg" alt="" width="800" height="400">
         </div>

         <div class="navigation-auto">
           <div class="auto-btn1"></div>
           <div class="auto-btn2"></div>
           <div class="auto-btn3"></div>       
           </div>

       </div>
       <div class="navigation-manual">
         <label for="radio1" class="manual-btn"></label>
         <label for="radio2" class="manual-btn"></label>
         <label for="radio3" class="manual-btn"></label>
         </div>
      </div> 
    </div>  
    </div>
</template>


<script>
// import PostPreview from '@/components/PostPreview'
import PostsService from "@/services/PostsService";
import Welcome from "@/views/Welcome";
// import CreateButton from '@/components/CreateButton'

export default {
  name: "home",

  components: { Welcome },

  data() {
    return {
      posts: null,
    };
  },

  mounted() {
    PostsService.index().then((response) => {
      this.posts = response.data;
    });
  },
};

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);
</script>

<style scoped>

 .home-container{ 
    min-height: 100vh;
  width: 1500PX;
 display: flex; 
 width: 100%; 
 margin: auto;  
align-items: center; 
} 

h2 {
  font-size: 18px;
  color: rgb(178, 250, 250);
}
h1 {
  font-size: 35px;
  color: rgb(178, 250, 250);
}
  /* body {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}  */

.container{
  min-height: 100vh;
  width: 1500PX;
  height: 100%;
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../../public/assets/img2.jpg); 
  
  background-position: center;
  background-size: cover;
  position: relative;
}
.card{
  width: 300px;
  height: 430px;
  display: inline-block;
  border-radius: 10px;
  padding: 15px 12px;
  box-sizing: border-box;
  cursor: pointer;
  margin: 50px 60px;
  background-position: center;
  background-size: cover;
  transition: transform 0.5s;
}
.card1{
   background-image:url(../../public/assets/pexel1.jpg);
}
.card2{
   background-image:url(../../public/assets/pexel2.jpg);
}
.card3{
   background-image:url(../../public/assets/pexel3.jpg);
}
.card:hover{
  transform: translateY(-10px);
}
h5{
  color: rgb(255, 255, 255);
  text-shadow: 0 0 5px #999 ;
}
.card p{
  text-shadow: 0 0 5px rgb(181, 241, 226) ;
  font-size: 15px;
}
h4{
color: rgb(255, 255, 255);
  text-shadow: 0 0 5px #999 ;
  position: center;
  margin: 10px 30px;
}
.slider {
  margin: 80px 225px;
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
}
.slides {
  width: 100%;
  height: 500px;
  display: flex;
}
.slides input {
  display: none;
}
.slide {
  widows: 20%;
  transition: 2s;
}

.slide img {
  width: 800px;
  height: 500px;
}

.navigation-manual {
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
}

.manual-btn {
  border: 2px solid #40d3dc;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}
.manual-btn:not(:last-child) {
  margin-right: 40px;
}
.manual-btn:hover {
  background-color: #40d3dc;
}
#radio1:checked ~ .first {
  margin-left: 0;
}
#radio2:checked ~ .first {
  margin-left: -100%;
}
#radio3:checked ~ .first {
  margin-left: -200%;
}

.navigation-auto {
  position: absolute;
  display: flex;
  width: 800px;
  justify-content: center;
  margin-top: 460px;
}
.navigation-auto div {
  border: 2px solid #40d3dc;
  padding: 5px;
  border-radius: 10px;
  transition: 1s;
}
.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}
#radio1 :checked ~ .navigation-auto .auto-btn1 {
  background: #40d3dc;
}
#radio2 :checked ~ .navigation-auto .auto-btn2 {
  background: #40d3dc;
}
footer{
  width: 100%;
  background-color:color;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
</style>