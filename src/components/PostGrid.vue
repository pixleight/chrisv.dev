<template>
  <div>
    <Snippet v-for="post in posts" :key="post.node.id" :post="post.node" />
  </div>
</template>

<script>
  import Snippet from '~/components/Snippet';

  export default {
    name: 'PostGrid',
    props: {
      posts: Array,
    },
    components: {
      Snippet,
    }
  }
</script>

<style scoped>
div {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  grid-auto-flow: dense;
  grid-gap: 2rem;
}
</style>