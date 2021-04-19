<template>
    <div id="app">
    <NavBar />
    <!-- think we still want the navbar here -->
        <h3 style="text-align:center;color:gray;font-size:24px"> welcome to BECS, the #1 desitnation for college information</h3>
        <Welcome />

        <main>
        <router-view/>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Welcome from '@/views/Welcome'

export default {
    name: 'app',
    components: {Welcome, NavBar},
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
}
</style>
