<template lang="html">
  <div class="signup">
    <form @submit.prevent="signUp">
      <h1>Sign Up</h1>
      <p class="error" :class="{ 'deprecated-error' : deprecatedError }">{{ error }}</p>
      <input type="text" v-model="firstname" placeholder="First Name">
      <input type="text" v-model="lastname" placeholder="Last Name">
      <input type="text" v-model="username" placeholder="Username" ref="username">
      <input type="email" v-model="email" placeholder="E-Mail">
      <input type="password" v-model="password" placeholder="Password">
      <input type="password" v-model="passwordRepeat" placeholder="Repeat Password">
      <p v-if="!passwordsMatch" class="error">Passwords do not match!</p>
      
        <label for="usertype" style="float:left; padding-top: 5px; padding-left: 20px;">User Type:</label>
      <div style="padding-bottom: 5px; padding-right: 20px;">
          <select name="usertype" v-model="usertype" style="float:right; padding: 5px 0px 5px 0px;">
           <option value="" disabled selected>Enter user type</option>
           <option value="Current Student"> Current Student </option>
           <option value="Prospective Student"> Prospective Student </option>
          </select>
      </div>
      <br>
      <div v-if="usertype === 'Current Student'" style="padding-top: 20px">
        <label for="userschool" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">Current School:</label>
         <div style="padding-right: 20px;">
          <select name="userschool" v-model="userschool" style="float:right; padding: 5px 28px 5px 0px;">
           <option value="" disabled selected>Select a school</option>
           <option value="Knox College"> Knox College </option>
          </select>
          </div>
          <br>
         <br />
      </div>
      <input class="button" type="submit" value="Sign Up">
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'signup',

  data() {
    return {
      error: '',
      deprecatedError: false,
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      usertype: '',
      userschool: ''
    }
  },

  methods: {
    signUp() {
      if (this.passwordsMatch) {
        this.deprecatedError = false;
        console.log(
          this.firstname,
          this.lastname,
          this.username,
          this.password,
          this.email,
          this.usertype,
          this.userschool
        )
        AuthenticationService.signup({
          firstname: this.firstname,
          lastname: this.lastname,
          username: this.username,
          password: this.password,
          email: this.email,
          usertype: this.usertype,
          userschool: this.userschool
        })
        .then(response => {
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push({name: 'Landing'})
        })
        .catch(e => {
          this.error = e.response.data.error;
        })
      }
      }
  },

  computed: {
    passwordsMatch() {
      return (this.password == this.passwordRepeat)
    }
  },

  watch: {
     firstName() {
      this.deprecatedError = true;
    },

   lastName() {
      this.deprecatedError = true;
    },

    username() {
      this.deprecatedError = true;
    },

    password() {
      this.deprecatedError = true;
    },

    passwordRepeat() {
      this.deprecatedError = true;
    },

    email() {
      this.deprecatedError = true;
    },

     userType() {
      this.deprecatedError = true;
    },

    userSchool() {
      this.deprecatedError = true;
    }
  },

  mounted() {
    this.$refs.username.focus();
  }
}
</script>

<style scoped lang="css">
.signup {
  background-image: url(/static/newsletter-signup.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 500px;
  height: calc(100vh);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  background-color: #E0CBA8;
  max-width: 500px;
  height: 90%;
  width: 90%;
  margin-bottom: 49px;
  margin-top:25px;
  padding: 20px;
}

h1 {
  text-align: center;
}

input {
  display: flex;
  width: 100%;
  margin: 0;
  border: none;
  background: #779FA1;
  padding: 15px;
  text-align: center;
  margin: 0px 0;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}
select {
  background: #faf7f2;
}
</style>