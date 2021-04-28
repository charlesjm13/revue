<template>
    <header style="margin: auto; text-align:center;">
        <SignUpButton style="font-size: 20px;" text="Sign Up" color="#779FA1" />
        <SignInButton style="font-size: 20px;" text="Sign In" color="#88498F" />
    </header>
    </div>
</template>

<script>
    import SignUpButton from '@/components/Signupbutton'
    import SignInButton from '@/components/Signinbutton'
    export default {
        name: 'welcome',
        components: {SignUpButton, SignInButton}    
    }
</script>

<style scoped lang="css">
   .buttons {
    font-family: 'Verdana', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #4B284F;
}
</style>