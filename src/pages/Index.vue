<template>
  <Layout>
    <template #hero>
      <HomeHero class="row-start-1 lg:col-span-3 xl:col-span-4" />
    </template>
    <template #default>
      <PostSection
        class="mb-16"
        heading="Code Snippets"
        intro="Bits of code I've picked found helpful over the years."
        :posts="snippets"
      />
      <PostSection
        class="mb-16"
        heading="Things I've Built"
        intro="Examples of projects I've worked on, big and small."
        :posts="workItems"
      />
      <!-- <PostSection
        heading="Snippets"
        intro="Examples of projects I've worked on, big and small."
      /> -->
      <!-- <BrandsList/> -->
    </template>
  </Layout>
</template>

<script>
  import HomeHero from '@/components/header/HomeHero'
  import PostSection from '@/components/posts/PostSection'
  import BrandsList from '@/components/footer/brands/BrandsList'

  export default {
    components: {
      PostSection,
      HomeHero,
      BrandsList,
    },
    computed: {
      workItems() {
        return this.$page.collections.workItems;
      },
      snippets() {
        return this.$page.snippets.edges;
      }
    }
  }
</script>

<style scoped>

</style>

<page-query>
{
  collections: settings(path: "/content/settings/collection-order/") {
    workItems {
      id
      title
      path
      tags {
        title
      }
      excerpt
      image
    }
  }
  snippets: allSnippet(limit: 6) {
    edges {
      node {
        id
        title
        date
        path
        image
      }
    }
  }
}
</page-query>