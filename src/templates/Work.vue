<template>
  <Layout>
    Work
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
    post: work(id: $id) {
      id
      title
      excerpt
    }
  }
</page-query>