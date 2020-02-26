<template>
  <Layout>
    <SectionHeader variant="green">
      <h1 class="heading">
        <span aria-hidden="true">🖋️</span> Articles
      </h1>
      <p>More in-depth articles on a variety of topics</p>
    </SectionHeader>

    <PostGrid :posts="$page.posts.edges" />
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
  posts: allFaker(limit: 6) {
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