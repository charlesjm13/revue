<template>
  <div class="home container">
    <div class="txtcenter" style="color: #FAF7F2; padding-top: 100px;">
      <h1> Welcome {{ $store.state.user.username }}</h1>
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


.txtcenter {
  text-align: center;
}
.container{
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}
</style>