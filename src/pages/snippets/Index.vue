<template>
  <Layout>
    <SectionHeader variant="purple">
      <h1 class="heading">
        <span aria-hidden="true">🧙</span> Snippets
      </h1>
      <p>Little magic bits of code I’ve picked up along the way</p>
    </SectionHeader>

    <PostGrid
      :posts="$page.posts.edges"
    />
  </Layout>
</template>

<script>
  import SectionHeader from '~/components/SectionHeader';
  import PostGrid from '~/components/PostGrid';
  export default {
    metaInfo: {
      title: 'Snippets',
    },
    components: {
      SectionHeader,
      PostGrid,
    }
  }
</script>

<style scoped>

</style>

<page-query>
query {
  posts: allSnippet(limit: 6) {
    edges {
      node {
        id
        title
        slug
        thumbnail
        avatar
        path
      }
    }
  }
}
</page-query>