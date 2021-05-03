<template>
  <div class="home container">
    <div class="txtcenter">
      <h1> Questions and Answers</h1>
    </div>

    <div class="contentwrapper">
      <div class="port-items-wrapper">

        <div class="port-item-wrapper">
          <div class="port-img-background" style=" background-image: url('./assets/classes.jpg')">
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <!-- <img src="./assets/s.png" alt=""> -->
              </div>
              <div class="subtitle">
                Classes 
              </div>
              </div>
          </div>
          </div>
           <div class="port-item-wrapper">
          <div class="port-img-background" style=" background-image: url('./assets/campuslife.jpg')">
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <!-- <img src="./assets/h.png" alt=""> -->
              </div>
              <div class="subtitle">
                Campus Life
              </div>
              </div>
          </div>
          </div>
           <div class="port-item-wrapper">
          <div class="port-img-background" style=" background-image: url('./assets/extracurricular.jpg')">
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <!-- <img src="./assets/s.png" alt=""> -->
              </div>
              <div class="subtitle">
                extracurricular
              </div>
              </div>
          </div>
          </div>

      </div>
      </div>
    <!-- <PostPreview v-for="post in posts" :key="post.id" :post="post">
      {{ post.title }}
    </PostPreview>
    <CreateButton></CreateButton> -->
  </div>
</template>

<script>
// import PostPreview from '@/components/PostPreview'
// import PostsService from "@/services/PostsService";
// import CreateButton from '@/components/CreateButton'
export default {
  name: "QnA",
// components: { PostPreview, CreateButton },
// data() {
//     return {
//       posts: null,
//     };
//   },

//   mounted() {
//     PostsService.index().then((response) => {
//       this.posts = response.data;
//     });
//   },
};


</script>

<style>
.txtcenter {
  text-align: center;
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
</style>