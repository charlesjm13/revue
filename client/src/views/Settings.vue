<template>
  <div class="settings">
    <form>
      <label><strong>Change first name:  &nbsp;</strong></label><!--Allows input for first name-->
      <input v-model="fname" placeholder="First Name"><br><br>
      <label><strong>Change last name: &nbsp;</strong></label><!--Allows input for last name-->
      <input v-model="lname" placeholder="Last Name"><br><br>
      <label><strong>Change school: &nbsp;</strong></label><!--Allows input for school name-->
      <input v-model="school" placeholder="School Name"><br><br>
      <label><strong>Change email address: &nbsp;</strong></label><!--Allows input for email address-->
      <input v-model="email" placeholder="Email Address"><br><br>
      <label><strong>Reset password: &nbsp;</strong></label><!--Allows input for new password-->
      <input v-model="password" placeholder="Reset Password"><br><br>
      <label><strong>Change student type: &nbsp;</strong></label><!--Allows selection of student type-->
      <select v-model="stype">
          <option value="" disabled selected>Student types:</option>
          <option>Prospective student</option>
          <option>Current student</option>
      </select><br><br>
      <label><strong>Change major/minor: &nbsp;</strong></label> <!--Allows input for major/minor-->
      <input v-model="mm" placeholder="Format: 'Major/Minor'"><br><br>
      <label><strong>Change clubs/interests: </strong></label><!--Allows input for clubs/interests-->
      <input v-model="interests" placeholder="Format: 'Clubs/Interests'"><br><br>
      <label><strong>Change mini-bio: &nbsp;</strong></label><br /><!--Allows input for mini bio-->
      <textarea v-model="aboutme" placeholder="Mini-Bio goes here" rows="10" cols="35"></textarea><br /><br />
      <label><strong>Replace profile picture: &nbsp;</strong></label><!--Allows change in profile picture-->
      <input type="file" @change="changeImage" accept="image/*"><br />
      <img :src="photo" width="300" height="300"><br /><br />
      <!---<label><strong>Change tags:</strong></label><br />-->

    </form>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      fname: '',
      lname: '',
      school: '',
      email: '',
      password: '',
      stype: '',
      major: '',
      interests: '',
      bio: '',
      photo: null
    }
  },
  methods: {
    changeImage (e) {
      const image = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(image)
      reader.onload = e => {
        this.photo = e.target.result
        console.log(this.photo)
      }
    }
  }
}
</script>

<style>
  form{
    text-align: center;
  }
</style>
