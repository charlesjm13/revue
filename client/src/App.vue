<template>
    <div id="app">
        <h3 style="text-align:center;color:gray;font-size:24px"> welcome to BECS, the #1 desitnation for college information</h3>
        <Welcome />

        <main>
        </main>
    </div>
</template>

<script>
//import NavBar from '@/components/NavBar'
import Welcome from '@/views/Welcome'

export default {
    name: 'app',
    components: {Welcome},
// removed NavBar from components
    created() {
        this.$store.dispatch('updateSubscribedSubvues')
    }
}
</script>


<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: yellow;
}
</style>
