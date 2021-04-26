<template lang="html">
<<<<<<< HEAD
  <div class="home container">
    <div class = "txtcenter">
      <h1>WELCOME TO BECS!</h1>    
      <h2>To know your place better</h2>
    </div>
    <div class = "idk">
      <img  src= "/assets/image3.jpg" width="800" height="400">
     
    </div>
  

    <!-- <PostPreview v-for="post in posts" :key="post.id" :post="post">
=======
  <div class="home container" style="background: #564154">
    <h1 style="color:#E0CBA8">Recent Posts</h1>
    <PostPreview v-for="post in posts" :key="post.id" :post="post">
>>>>>>> shahm
      {{ post.title }}
    </PostPreview> -->

    <!-- <CreateButton></CreateButton> -->
  </div>
</template>

<<<<<<< HEAD

<script>
// import PostPreview from '@/components/PostPreview'
import PostsService from "@/services/PostsService";
// import CreateButton from '@/components/CreateButton'

=======
<script> 
import PostPreview from '@/components/PostPreview'
import PostsService from '@/services/PostsService'
import CreateButton from '@/components/CreateButton'
>>>>>>> shahm
export default {
  name: "home",

  // components: { PostPreview, CreateButton },

  data() {
    return {
      posts: null,
    };
  },

  mounted() {
<<<<<<< HEAD
    PostsService.index().then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style lang="css">
@import url('https://fonts.googleleapis.com/css2?family=Poppins:wght@300;400&display=swap');
body{
  font-family: 'Poppins', sans-serif;
}
 /* #app{ 
  width: 9000px;
  height: 100vh;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
} */

.txtcenter {
  text-align: center;
}

.idk {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 57%;
}
.img{
  display:block;
  margin-left:auto;
  margin-right:auto;
  width:10%;
}
</style>

=======
    PostsService.index()
      .then(response => {
        this.posts = response.data
      })
  }
}
</script>
>>>>>>> shahm
