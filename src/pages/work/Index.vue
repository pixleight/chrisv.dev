<template>
  <Layout>
    <SectionHeader variant="blue">
      <h1 class="heading">
        <span aria-hidden="true">👨‍💻</span> Work
      </h1>
      <p>Selected examples of my work</p>
    </SectionHeader>

    <PostGrid
      :posts="$page.posts.edges"
    />
  </Layout>
</template>

<script>
  import PostGrid from '~/components/PostGrid';
  import SectionHeader from '~/components/SectionHeader';

  export default {
    metaInfo: {
      title: 'My Work',
    },
    components: {
      PostGrid,
      SectionHeader,
    }
  }
</script>

<style scoped>

</style>

<page-query>
query {
  posts: allWork(limit: 6) {
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