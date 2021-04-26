<template>
    <header style="margin: auto; text-align:center;">
        <SignUpButton style="font-size: 20px;" text="Sign Up" color="#FF6542" />
        <SignInButton style="font-size: 20px;" text="Sign In" color="#88498F" />
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