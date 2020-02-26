<template>
  <Layout>
    Article
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
    post: article(id: $id) {
      id
      title
      excerpt
    }
  }
</page-query>