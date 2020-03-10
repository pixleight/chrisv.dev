<template>
  <div class="relative grid gap-8">
    <post-preview v-for="post in posts" :key="post.node.id" :post="post.node" />
  </div>
</template>

<script>
  import Snippet from '~/components/Snippet';
  import PostPreview from '~/components/PostPreview';

  export default {
    name: 'PostGrid',
    props: {
      posts: Array,
    },
    components: {
      PostPreview,
    }
  }
</script>

<style scoped>
div {
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
}
</style>