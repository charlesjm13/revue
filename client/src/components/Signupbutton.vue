<template>
    <button @click="onClick()" :style="{background: color}">Sign Up</button>
</template>

<script>
    export default {
        name: 'SignUpButton',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick(){
                this.$router.push({name: 'SignUp'})
                console.log('switch to sign up screen')
            }
        }
    }
    
</script>