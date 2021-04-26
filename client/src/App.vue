<template>
    <div id="app">
    <NavBar />
        <main>
        <router-view/>
        </main>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
    name: 'app',
    components: {NavBar},
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
    font-family:"Courier New", sans-serif;
    font-weight: bold;
}
</style>