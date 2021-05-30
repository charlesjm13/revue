<template lang="html">
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <i id="star-one-solid" 
        class="fa fa-star" 
        v-on:click="setOne" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3 || numStars == 2 || numStars == 1">
    </i>
    <i id="star-one-outline" 
        class="fa fa-star-o" 
        v-on:click="setOne" 
        v-if="numStars == 0">
    </i>
    <i id="star-two-solid" 
        class="fa fa-star" 
        v-on:click="setTwo" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3 || numStars == 2">
    </i>
    <i id="star-two-outline" 
        class="fa fa-star-o" 
        v-on:click="setTwo" 
        v-if="numStars == 1 || numStars == 0">
    </i>
    <i id="star-three-solid" 
        class="fa fa-star" 
        v-on:click="setThree" 
        v-if="numStars == 5 || numStars == 4 || numStars == 3">
    </i>
    <i id="star-three-outline" 
        class="fa fa-star-o" 
        v-on:click="setThree" 
        v-if="numStars == 2 || numStars == 1 || numStars == 0">
    </i>
    <i id="star-four-solid" 
        class="fa fa-star" 
        v-on:click="setFour" 
        v-if="numStars == 4 || numStars == 5">
    </i>
    <i id="star-four-outline" 
        class="fa fa-star-o" 
        v-on:click="setFour" 
        v-if="numStars == 3 || numStars == 2 || numStars == 1 || numStars == 0">
    </i>
    <i id="star-five-solid" 
        class="fa fa-star" 
        v-on:click="setFive"
        v-if="numStars == 5">
    </i>
    <i id="star-five-outline" 
        class="fa fa-star-o" 
        v-on:click="setFive" 
        v-if="numStars == 4 || numStars == 3 || numStars == 2 || numStars == 1 || numStars == 0">
    </i>
</template>

<script>
export default {
    name: 'stars',
    components: {},
    emits: ['clicked'],
    data() {
        return {
            numStars: "0"
        }
    },
    methods: {
        setOne() {
            this.numStars = "1";
            this.$emit('clicked', this.numStars)
        },
        setTwo() {
            this.numStars = "2";
            this.$emit('clicked', this.numStars)
        },
        setThree() {
            this.numStars = "3";
            this.$emit('clicked', this.numStars)
        },
        setFour() {
            this.numStars = "4";
            this.$emit('clicked', this.numStars)
        },
        setFive() {
            this.numStars = "5";
            this.$emit('clicked', this.numStars)
        }
    }
}
</script>

<style>
</style>