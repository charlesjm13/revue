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
    min-height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #FAF7F2;
}
h2 {
    text-align:center;
    color:black;
    font-size:28px;
    font-family:"Verdana", sans-serif;
    font-weight: bold;
}
</style>