<template lang="html">
  <div class="home container">
    <div class = "txtcenter" style="text-align:center;">
      <h1>WELCOME TO BECS!</h1>    
      <h2>To know your place better</h2>
    </div>
    <Welcome v-if="!$store.state.isUserLoggedIn"/>
    <div class = "idk" style="padding-top: 20px;">
      <img  src= "./assets/image3.jpg" width="800" height="400">
     
    </div>
  

    <!-- <PostPreview v-for="post in posts" :key="post.id" :post="post">
=======
  <div class="home container" style="background: #564154">
    <h1 style="color:#E0CBA8">Recent Posts</h1>
=======
  <div class="home container" style="background: #779FA1">
    <h1 style="color:#F0EAD6">Recent Posts</h1>
>>>>>>> shahm
    <PostPreview v-for="post in posts" :key="post.id" :post="post">
>>>>>>> shahm
      {{ post.title }}
    </PostPreview> -->

    <!-- <CreateButton></CreateButton> -->
  </div>
</template>


<script>
// import PostPreview from '@/components/PostPreview'
import PostsService from "@/services/PostsService"
import Welcome from '@/views/Welcome'
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
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>

<style scoped lang="css">
h2{
  font-size: 18px;
  color:darkslategray
}
h1{
  font-size: 35px;
  color:darkslategray
}
</style>