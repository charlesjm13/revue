<template lang="html">
  <div class="signup">
    <form @submit.prevent="signUp">
      <h1>Sign Up</h1>
      <p class="error" :class="{ 'deprecated-error' : deprecatedError }">{{ error }}</p>
      <input type="text" v-model="firstname" placeholder="First Name">
      <input type="text" v-model="lasttname" placeholder="Last Name">
      <input type="text" v-model="username" placeholder="Username" ref="username">
      <input type="email" v-model="email" placeholder="E-Mail">
      <input type="password" v-model="password" placeholder="Password">
      <input type="password" v-model="passwordRepeat" placeholder="Repeat Password">
      <p v-if="!passwordsMatch" class="error">Passwords do not match!</p>
      
        <label for="user-types" style="float:left; padding-top: 5px; padding-left: 20px;">User Type:</label>
      <div style="padding-bottom: 5px; padding-right: 20px;">
          <select name="user-types" v-model="usertype" style="float:right; padding: 5px 0px 5px 0px;">
           <option value="" disabled selected>Enter user type</option>
           <option value="Current Student"> Current Student </option>
           <option value="Prospective Student"> Prospective Student </option>
          </select>
      </div>
      <br>
      <div v-if="usertype === 'Current Student'" style="padding-top: 20px">
        <label for="current-school" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">Current School:</label>
         <div style="padding-right: 20px;">
          <select name="current-school" v-model="userschool" style="float:right; padding: 5px 28px 5px 0px;">
           <option value="" disabled selected>Select a school</option>
           <option value="Knox College"> Knox College </option>
          </select>
          </div>
          <br>
          <div v-if="userType === 'Current Student'" style="padding-top: 20px">
              <label for="current-school" style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">Current School:</label>
              <div style="padding-right: 20px;">
                  <select name="current-school" v-model="userschool" style="float:right; padding: 5px 28px 5px 0px;">
                      <option value="" disabled selected>Select a school</option>
                      <option value="Current Student"> Knox College </option>
                  </select>
              </div>
          </div><br />
          <label style="float:left; padding-bottom: 25px; padding-top: 5px; padding-left: 20px;">Tags:</label>
          <div style="padding-bottom: 5px; padding-right: 20px;">
              <select name="user-types" @change="addToTags($event)" v-model="usertags" style="float:right; padding: 5px 0px 5px 0px;">
                  <option value="" disabled selected>Pick tags that relate to your interest</option>
                  <!--<option v-for="tag in availableTags" :key="tag"></option>-->
                  <option value="Math">Math</option>
                  <option value="Science">Science</option>
                  <option value="Literature">Literature</option>
                  <option value="Art">Art</option>
                  <option value="Business">Business</option>
              </select><br /><br />
          </div>

          <div v-if="returnVal() > 0">
          <label><strong><u>Your tags:</u></strong></label>
          <div v-for="tag in chosenTags" :key="tag">
              <button @click="removeFromTags(tag)" style="padding: 5px 5px 5px 0px;">Remove </button>
              <label>&nbsp; {{tag}}</label>
          </div>
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
      userschool: '',
      usertags: '',
      chosenTags: [],
      val: 0,
      availableTags: ["Math", "Science", "Reading", "Art", "Business"]
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
      },

      addToTags(event) {
          this.chosenTags.push(event.target.value)
          this.val = this.val + 1
      },

      removeFromTags(event){
          this.chosenTags.splice(this.chosenTags.indexOf(event), 1)
          this.val = this.val - 1
      },

      returnVal() {
          return this.val
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
  background-image: url(/static/newsletter-login.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 500px;
  height: calc(100vh - 49px);
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  background-color: #E0CBA8;
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
  background: #FAF7F2;
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
