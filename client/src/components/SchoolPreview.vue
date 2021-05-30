<template lang="html">
  <div class="school-preview">
    <router-link :to="{name:'school', params: {name: school.name, id: school.id}}">
                  <p>{{ name }}</p>

    </router-link>

  </div>
</template>

<script>

export default {
    name: 'school-preview',

    props: {
        school: {}
    },

    computed: {
        name() {
            return this.school.content
        }
    }
}
</script>

<style scoped lang="css">
p {
    margin: 5px 0;
}

.school-preview {
    height: 150px;
    margin-bottom: 25px;
    display: block;
    color: black;
    display: grid;
    grid-template-columns: 3fr 1fr 15fr;
}

.image {
    width: 100%;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.body-area {
    color: black;
}

.blue-highlight {
    color: rgb(48, 99, 219);
}
</style>
