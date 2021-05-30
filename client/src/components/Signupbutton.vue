<template>
    <Button @click="onClick()">Sign Up</Button>
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