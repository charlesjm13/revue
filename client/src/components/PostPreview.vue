<template lang="html">
  <div class="post-preview">
    <Vote :upvotes="post.upvotes" :downvotes="post.downvotes" :postId="post.id" @error="(value) => {error = value}"></Vote>
    <router-link :to="{name:'Post', params: {id: post.id}}" class="body-area">
        <h3><slot></slot></h3>
      <p>
        <span>on {{ post.created }}</span>
        <span v-show="!hideUser">&nbsp;by <span class="blue-highlight">u/{{ post.user.username }}</span></span>
        </p>
       <p>{{ post.content }}</p>
    </router-link>
  </div>
  <!-- <div class="post-preview">
    <Vote :upvotes="post.upvotes" :downvotes="post.downvotes" :postId="post.id" @error="(value) => {error = value}"></Vote>
    <router-link :to="{name:'Post', params: {id: post.id}}" class="body-area">
      <h3><slot></slot></h3>
      <p>
        <span>on {{ post.created }}</span>
        <span v-show="!hideUser">&nbsp;by <span class="blue-highlight">u/{{ post.user.username }}</span></span>
        </p>
      <p>{{ title }}</p>
       <p>{{ content }}</p>
    </router-link>
  </div> -->
</template>

<script>
import Vote from '@/components/Vote'

export default {
    name: 'post-preview',

    props: {
        post: {},
        hideUser: {
            default: false
        }
    },

    components: { Vote },

    computed: {
        description() {
            return this.post.content.slice(0, 750) + '...'
        },
        // content(){
        //     return this.post.content
        // },
        // title(){
        //     return this.post.title
        // }
    }
}
</script>

<style scoped lang="css">
p {
    margin: 5px 0;
}

.post-preview {
    height: 150px;
    margin-bottom: 0px;
    display: block;
    color: black;
    display: grid;
    grid-template-columns: 5fr 100fr 15fr;
    /* background: cyan; */
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
