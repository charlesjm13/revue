<template>    
    <div class="buttons">
    <header>
        <SignUpButton text="Sign Up" color="#FF6542" />
        <SignInButton text="Sign In" color="#88498F" />
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