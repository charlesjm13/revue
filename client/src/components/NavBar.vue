<template lang="html">
  <nav>
    <router-link v-if="!$store.state.isUserLoggedIn" class="title" :to="{ name: 'Home', params: {} }">💻</router-link>
    <router-link v-if="!$store.state.isUserLoggedIn" class="title" :to="{ name: 'About'}">About</router-link>

    <!-- <div class="dropdown">
    <router-link class="title" :to="{ name: 'Home', params: {} }">💻</router-link>
    <div class="dropdown">
      <button class="dropbtn">Subvues</button>
      <div class="dropdown-content">
        <router-link
          v-for="subvue in $store.state.subscribedSubvues"
          :key="subvue.permalink"
          :to="{ name: 'Subvue', params: {name: subvue.permalink} }"
          >{{ subvue.name }}</router-link>
        <router-link class="create-subvue" :to="{ name: 'CreateSubvue' }">Create a Subvue</router-link>
      </div>
    </div> -->
    <router-link v-if="$store.state.isUserLoggedIn" style="float:left" :to="{ name: 'Landing', params: {} }">Home</router-link>
    <router-link v-if="$store.state.isUserLoggedIn" style="float:left" :to="{ name: 'QnA', params: {} }">QnA</router-link>
    <router-link v-if="$store.state.isUserLoggedIn" style="float:left" :to="{ name: 'CourseRatings', params: {} }">Course Ratings</router-link>
    <router-link v-if="$store.state.isUserLoggedIn" style="float:left" :to="{ name: 'CollegeRatings', params: {} }">College Ratings</router-link>
    
    <router-link v-if="!$store.state.isUserLoggedIn" style="float:right" :to="{ name: 'SignUp', params: {} }">Sign Up</router-link>
    <router-link v-if="!$store.state.isUserLoggedIn" style="float:right" :to="{ name: 'Login', params: {} }">Login</router-link>
    
    <a v-if="$store.state.isUserLoggedIn" style="float:right" @click="logout()">Logout</a>
    <router-link v-if="$store.state.isUserLoggedIn" style="float:right" :to="{ name: 'Profile', params: { username: $store.state.user.username } }">{{ $store.state.user.username }}</router-link>
    
    <router-link v-if="$store.state.isUserLoggedIn" style="float:right" :to="{ name: 'Settings', params: {username: $store.state.user.username} }">Settings</router-link>
    <router-link v-if="$store.state.isUserLoggedIn" style="float:left" :to="{ name: 'SchoolSelector', params: {} }">School Selector</router-link>

  </nav>
</template>

<script>
export default {
  name: 'nav',

  methods: {
    logout() {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped lang="css">
nav {
  overflow: hidden;
  background-color: #006653;
  font-family: 'Courier New', Courier, monospace;
}

nav a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.title {
  font-weight: bold;
}

.create-subvue {
  background-color: rgb(33,44,46);
  color: white !important;
}

.create-subvue:hover {
  background-color: rgb(240, 234, 214) !important;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
}

nav a:hover, .dropdown:hover .dropbtn {
  background-color: #212C2E;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #E0CBA8;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #E0CBA8;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
