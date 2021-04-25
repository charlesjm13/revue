<template lang="html">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <i id="star-one-solid" 
        class="fa fa-star" 
        v-on:click="numStars = 1" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3 || numStars == 2 || numStars == 1">
    </i>
    <i id="star-one-outline" 
        class="fa fa-star-o" 
        v-on:click="numStars = 1" 
        v-if="numStars == 0">
    </i>
    <i id="star-two-solid" 
        class="fa fa-star" 
        v-on:click="numStars = 2" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3 || numStars == 2">
    </i>
    <i id="star-two-outline" 
        class="fa fa-star-o" 
        v-on:click="numStars = 2" 
        v-if="numStars == 1 || numStars == 0">
    </i>
    <i id="star-three-solid" 
        class="fa fa-star" 
        v-on:click="numStars = 3" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3">
    </i>
    <i id="star-three-outline" 
        class="fa fa-star-o" 
        v-on:click="numStars = 3" 
        v-if="numStars == 2 || numStars == 1 || numStars == 0">
    </i>
    <i id="star-four-solid" 
        class="fa fa-star" 
        v-on:click="numStars = 4" 
        v-if="numStars == 4 || numStars == 5">
    </i>
    <i id="star-four-outline" 
        class="fa fa-star-o" 
        v-on:click="numStars = 4" 
        v-if="numStars == 3 || numStars == 2 || numStars == 1 || numStars == 0">
    </i>
    <i id="star-five-solid" 
        class="fa fa-star" 
        v-on:click="numStars = 5"
        v-if="numStars == 5">
    </i>
    <i id="star-five-outline" 
        class="fa fa-star-o" 
        v-on:click="numStars = 5" 
        v-if="numStars == 4 || numStars == 3 || numStars == 2 || numStars == 1 || numStars == 0">
    </i>
</template>

<script>
export default {
    name: 'stars',
    components: {},
    data() {
        return {
            numStars: 0
        }
    },
    methods: {
    }
}
</script>

<style>
</style>