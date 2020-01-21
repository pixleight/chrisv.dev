<template>
  <Layout>
    <h1>
      Index.vue
    </h1>
    <section>
      <Snippet v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<page-query>
query {
  posts: allFaker(limit: 16) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
      }
    }
  }
}
</page-query>

<script>
import Snippet from '~/components/Snippet';

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components: {
    Snippet,
  }
}
</script>

<style scoped>
section {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  grid-auto-flow: dense;
  grid-gap: 3rem;
}

@screen sm {
  article:nth-child(7n) {
    /* grid-column: span 2;
    grid-row: span 2; */
  }
}
</style>
