<template lang="html">
  <div class="signup">
    <form @submit.prevent="signUp">
      <h1>Sign Up</h1>
      <p class="error" :class="{ 'deprecated-error' : deprecatedError }">{{ error }}</p>
      <input type="text" v-model="firstName" placeholder="First Name">
      <input type="text" v-model="lasttName" placeholder="Last Name">
      <input type="text" v-model="username" placeholder="Username" ref="username">
      <input type="email" v-model="email" placeholder="E-Mail">
      <input type="password" v-model="password" placeholder="Password">
      <input type="password" v-model="passwordRepeat" placeholder="Repeat Password">
      <p v-if="!passwordsMatch" class="error">Passwords do not match!</p>
      <div style="text-align: center">
        <label for="user-types">Enter your user type:</label>
          <select name="user-types" v-model="userType" style="margin-left: 70px;">
           <option value="" disabled selected>Enter user type</option>
           <option value="Current Student"> Current Student </option>
           <option value="Prospective Student"> Prospective Student </option>
          </select>
      </div>
      <div v-if="userType === 'Current Student'" style="text-align: center; padding-top: 20px">
        <label for="current-school">Enter your current school:</label>
          <select name="current-school" v-model="userSchool" style="margin-left: 50px;">
           <option value="" disabled selected>Enter your school</option>
           <option value="Current Student"> Knox College </option>
          </select>
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
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      passwordRepeat: '',
      email: '',
      userType: '',
      userSchool: ''
    }
  },

  methods: {
    signUp() {
      if (this.passwordsMatch) {
        this.deprecatedError = false;
        AuthenticationService.signup({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          email: this.email,
          userType: this.userType,
          userSchool: this.userSchool
        })
        .then(response => {
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push({name: 'Home'})
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
  background: rgb(23, 92, 93);
  background-image: url(/static/newsletter-login.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: calc(100vh - 49px);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  background-color: white;
  max-width: 500px;
  width: 90%;
  margin-bottom: 49px;
  padding: 20px;
}

h1 {
  text-align: center;
}

input {
  display: block;
  width: 100%;
  margin: 0;
  border: none;
  background: rgb(223, 224, 221);
  padding: 15px;
  text-align: center;
  margin: 20px 0;

  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
}
</style>
