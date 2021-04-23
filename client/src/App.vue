<template>
    <div id="app">
    <NavBar />
        <h2 style="font-family:verdana;"> Welcome to BECS, the #1 desitnation for college information</h2>
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
    font-family: Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #564154;
}
h2 {
    text-align:center;
    color:#FF6542;
    font-size:28px;
    font-family:"Verdana";
}
</style>
