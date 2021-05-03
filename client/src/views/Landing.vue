<template>
  <div class="homecontainer" style="background-image: url(./assets/books.jpg);">
    <div class="txtcenter" style="color:black;">
      <h1> Hello {{ $store.state.user.username }}</h1>
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
font-family: 'Roboto', sans-serif;
}
<<<<<<< HEAD

=======
.homecontainer{
  min-height: 100vh;
  width: 1400px;
  background-position: center;
  background-size: cover;
  position: relative;
}
>>>>>>> e7dfd5146d265fcb2f952ad0163e559e3419e4e5

.txtcenter {
  text-align: center;
}
/* .container{
  height: 100vh;
  width: 1000px;
  /* background-image: url('../../public/assets/land2.jpg'); */
  /* background-position: center; */
  /* background-size: cover; */
/* } */ 
</style>