<template>
    <header style="margin: auto; text-align:center;">
        <SignUpButton style="font-size: 18px;"> </SignUpButton>
        <SignInButton style="font-size: 18px;"> </SignInButton>

    </header>

    
</template>

<script>
    import SignUpButton from '@/components/Signupbutton.vue'
    import SignInButton from '@/components/Signinbutton.vue'

    export default {
        name: 'welcome',
        components: {SignUpButton, SignInButton}    
    }

</script>