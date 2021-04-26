<template>
  <div class="home container">
    <div class="txtcenter" style="color:white;">
      <h1> Hello {{ $store.state.user.username }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style>
.txtcenter {
  text-align: center;
}
</style>