<template>
  <div class="home-container">
    <div class="txtcenter">
      <h1>Questions and Answers</h1>
    </div>

    <div class="contentwrapper">
      <div class="port-items-wrapper">
        <div class="port-item-wrapper">
          <div
            class="port-img-background"
            style="background-image: url('assets/classes.jpg')"
          >
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <img src="'../../public/assets/s.png'" alt="" />
              </div>
              <div class="subtitle">Classes</div>
            </div>
          </div>
        </div>
        <div class="port-item-wrapper">
          <div class="port-img-background" style="background-image: url('assets/campuslife.jpg')" >
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <img src="'../../public/assets/h.png'" alt="" />
              </div>
              <div class="subtitle">Campus Life</div>
            </div>
          </div>
        </div>
        <div class="port-item-wrapper">
          <div
            class="port-img-background"
            style="background-image: url('assets/extracurricular.jpg')"
          >
            <div class="img-text-wrapper">
              <div class="logo-wrappper">
                <img src="'../../public/assets/s.png'" alt="" />
              </div>
              <div class="subtitle">Extracurricular</div>
            </div>
          </div>
        </div>

      </div>
    </div>
 <!-- <div class="cards">
      <PostPreview class="post_card" v-for="post in posts" :key="post" :post="post">
        <h1> {{post.name}} </h1>
      </PostPreview>
    </div>
   
    <br />
   
    <PostPreview v-for="post in posts" :key="post" :post="post">
      {{ post.title }}
    </PostPreview>
    <CreateButton></CreateButton>
  </div> -->
    <PostPreview class = "block" v-for="post in posts" :key="post.id" :post="post">
      {{ post.title }}
    </PostPreview>>

    <CreateButton></CreateButton>
  </div>
</template>

<script>
import PostPreview from "@/components/PostPreview";
import QPostService from "@/services/QPostService";
import CreateButton from "@/components/CreateButton";

export default {
  // name: "post-preview"

  // props:{
  //   grid{},
  //   hideUser:{
  //     default: false;
  //   },

  // },

  // computed:{
  //   description(){
  //     return this.postdescription.slice(0,750)
  //   },
  // },

  name: "QnA",
  components: { PostPreview, CreateButton },
  data() {
    return {
       posts: null,
      // Pos: '',
    };
  },

  mounted() {
    QPostService.index().then((response) => {
      this.posts = response.data;
      console.log(this.posts);
    })
    .catch(e => {
      this.error = e.response.data.error
    })
    ;
  },
};

//  conts portfolioItems = document.querySelectorAll(".port-item-wrapper");
//  portfolioItems.forEach((portfolioItem) => {
  // portfolioItem.addEventListener("mouseover", () => {
    //  console.log(portfolioItem.childNodes[1].classList);
    // portfolioItem.childNodes[1].classList.add("img-darken");
  //  });
//  });
</script>

<style>
.home-container {
  width: 1300px;
  /* background: linear-gradient(#E0CBA8,#7c9ada); */
}
.txtcenter {
  text-align: center;
}
.port-items-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.port-item-wrapper {
  position: relative;
}
.port-img-background {
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
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:20px;
  margin-top: 20px;

}
.block {
  background: #ffffff;
  border: 1px solid rgb(0, 0, 0);
  text-align: center;
  padding: 25px;
  border-radius: 5px;
  margin-top: 5px;
}
.block:hover{
  background: #868686;
}
</style>
