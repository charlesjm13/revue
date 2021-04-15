<template>
    <button @click="onClick()" :style="{background: color}">Sign In</button>
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