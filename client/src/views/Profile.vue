<template>
    <div class="profile">
        <label><strong>Profile Picture</strong></label><br /><br /><br />
        <label><strong>First name &nbsp;</strong></label>
        <label><strong>Last name</strong></label><br /><br />
        <label><strong>Email</strong></label><br /><br />
        <label><strong>School</strong></label><br /><br />
        <label><strong>Major</strong></label><br /><br />
        <label><strong>Interests</strong></label><br /><br />
        <label><strong>About Me</strong></label><br /><br />
        
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
}
</script>

<style>
    div {
        text-align: center;
    }
</style>
