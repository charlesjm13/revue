<template>
    <button @click="onClick()" :class="button-close" :style="{background: color}">Sign In</button>
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
                console.log('switch to sign in screen')
            }
        }
    }
    
</script>