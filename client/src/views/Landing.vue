<template>
  <div class="homecontainer">
   
    <div class="container">
       <div class="txtcenter" style="color:black;">
      <h1> Hello {{ $store.state.user.username }}</h1>
    </div>
      </div>
      <div class="services_container">
      <div class="services_card">
        <h2>Experience Becs</h2>
        <button v-on:click = "clickQnA">Get started </button>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  methods: {
    clickQnA (){
      this.$router.push({name: 'QnA'})
    }
  }

};

</script>

<style scoped>
*{
  margin:0;
padding:0;
font-family: 'Roboto', sans-serif;
}
.homecontainer{
  min-height: 100vh;
  width: 1400px;
  background-image: url(../../public/assets/becs1.jpg);
  background-position: center;
  background-size: cover;
  position: relative;
}

.txtcenter {
  text-align: center;
}
.txtcenter h1{
position: absolute;
top:40px;
left:597px;
}
.services_container{
display: flex;
justify-content: center;
flex-wrap: wrap;
}
.services_card{
margin: 7rem;
height: 400px;
width: 325px;
border-radius: 4px;
background-image: linear-gradient(to bottom,rgba(0,0,0,0)0%, rgba(17,17,17,0.6)100%),url(../../public/assets/pexel.jpg);
background-size: cover;
position:relative;
color:#fff;
}
.services_card h2{
color: #fff;
position: absolute;
top:300px;
left: 30px;
}
.services_card button{
color: #fff;
padding:10px 20px;
border:none;
outline: none;
border-radius: 4px;
background:#f77062;
position: absolute;
top: 350px;
left: 30px;
font-size: 1rem;
}
.services_card:hover{
  transform: scale(1.075);
  transition: 0.25 ease-in;
  cursor: pointer;

}
@media screen and (max-width:480px) {
  .services_card{
    width: 300px;
  }
}

</style>