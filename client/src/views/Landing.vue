<template>
  <div class="homecontainer" style="background-image: url(./assets/books.jpg);">
    <div class="txtcenter" style="color:DarkGraySlate;">
      <h1> Hello, {{ $store.state.user.username }}!</h1>
      <h2 style="font-size:14px"> Click around, build your profile, or just chill here and admire our wallpaper.</h2>
    </div>
    <div class="container">
      </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
*{
  margin:0;
padding:0;
font-family: 'Verdana', sans-serif;
}
.homecontainer{
  min-height: 100vh;
  width: 1400px;
  background-position: center;
  background-size: cover;
  position: relative;
}

.txtcenter {
  text-align: center;
  background:salmon;
  color:darkgrayslate;
}
/* .container{
  height: 100vh;
  width: 1000px;
  /* background-image: url('../../public/assets/land2.jpg'); */
  /* background-position: center; */
  /* background-size: cover; */
/* } */ 
</style>