<template>
  <div class="home_container">
    <div class="txtcenter">
      <h1>ABOUT US</h1>
      <h2>We are a team of college students who want to help prospective students engage more with the community that they are going into.</h2>
    </div>
    <div class="img" style="margin:auto;">
      <img src="./assets/about.jpg" width="800" height="600" />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
.home_container{
 background: linear-gradient(#E0CBA8,#90ace7); 
  
}
.txtcenter {
  text-align: center;
}

.img{
  display:block;
  margin: auto;
  text-align:center;
}
</style>