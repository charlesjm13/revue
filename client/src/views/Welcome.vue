<template>
    <header>
       <!-- <h3 style="text-align:center;color:yellow">{{ title }}</h3> -->
        <SignUpButton text="Sign Up" color="black" />
        <SignInButton text="Sign In" color="white" />
    </header>
</template>

<script>
import SignUpButton from '@/components/Signupbutton'
import SignInButton from '@/components/Signinbutton'
export default {
    name: 'welcome',
    components: {SignUpButton, SignInButton}    
}
</script>