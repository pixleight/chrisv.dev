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
  query ($id: ID!) {
    post: snippet(id: $id) {
      id
      title
      excerpt
    }
  }
</page-query>