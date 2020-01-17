<template>
  <Layout>
    <h1>
      Index.vue
    </h1>
    <section>
      <article class="relative bg-gray-500 rounded-lg shadow overflow-hidden" v-for="edge in $page.posts.edges" :key="edge.node.id">
        {{ edge.node.title }}
        <g-image :src="edge.node.avatar" class="w-full absolute inset-0 object-cover" />
      </article>
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
}
</script>

<style scoped>
section {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 12rem;
  grid-auto-flow: dense;
  grid-gap: 1rem;
}

@screen sm {
  article:nth-child(7n) {
    grid-column: span 2;
    grid-row: span 2;
  }
}

img {
  transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

article:hover img {
  transform: scale(1.3) rotate(7deg);
}
</style>
