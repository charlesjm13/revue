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
    font-family: 'Verdana', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    align-items: center;
    text-align: left;
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 100%;
    justify-content: center;
    flex-direction: column;
    background-color: #f8dbd5;
}
h2 {
    text-align:center;
    color:DarkGraySlate;
    font-size:28px;
    font-family:"Verdana", sans-serif;
    font-weight: bold;
}
</style>