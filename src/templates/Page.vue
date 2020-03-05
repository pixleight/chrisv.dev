<template>
  <Layout>
    Snippet
  </Layout>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>

<page-query>
  query ($slug: Slugs!) {
    post: page(slug: $slug {
      id
      title
      excerpt
    }
  }
</page-query>