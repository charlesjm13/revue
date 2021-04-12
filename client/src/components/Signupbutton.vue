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
                console.log('switch to sign up screen')
            }
        }
    }
    
</script>