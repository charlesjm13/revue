<template>
    <Button @click="onClick()" label="Danger" class="p-button-danger">Sign In</Button>
</template>

<script>
    export default {
        name: 'SignInButton',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick(){
                this.$router.push({name: 'Login'})
                console.log('switch to sign in screen')
            }
        }
    }
    
</script>