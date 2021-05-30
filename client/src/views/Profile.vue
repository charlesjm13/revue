<template>
    <div class="profile">
        <h1><strong>{{ $store.state.user.firstname }} {{ $store.state.user.lastname }} &nbsp;</strong></h1>
        <label><strong><label>{{ $store.state.user.email }}</label></strong></label><br /><br />
        <label><strong>{{ $store.state.user.usertype }}</strong></label><br /><br />
        <label><strong>{{ $store.state.user.userschool }}</strong></label><br /><br />
        <!--
        <label><strong>Major:{{ $store.state.user.usermajor }}</strong></label><br /><br />
        <label><strong>Interests: {{ $store.state.user.userinterests }}</strong></label><br /><br />
        <label><strong>About Me: {{ $store.state.user.userbio }}</strong></label><br /><br />
            -->
    </div>
</template>

<script>
    export default {
        name: 'settings',
        data() {
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

    .profile {
        padding: 100px 0;
    }
</style>

