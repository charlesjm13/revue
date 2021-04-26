<template>
    <div id="app">
    <NavBar />
        <h2> Welcome to BECS
        </h2>
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
    components: {NavBar, Welcome},
// removed Welcome from components
    created() {
        this.$store.dispatch('updateSubscribedSubvues')
    }
}
</script>


<style>
#app {
    font-family: 'Courier New', Courier, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    text-align: left;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #4B284F;
}
h2 {
    text-align:center;
    color:#F0EAD6;
    font-size:28px;
    font-family:"Verdana", sans-serif;
    font-weight: bold;
}
</style>