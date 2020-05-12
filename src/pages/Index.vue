<template>
  <Layout>
    <template #hero>
      <HomeHero class="lg:col-span-3 xl:col-span-4 row-start-1" />
    </template>
    <template #default>
      <PostSection
        class="mb-16"
        heading="My Work"
        intro="Examples of projects I've worked on, big and small."
      />
      <PostSection
        heading="Snippets"
        intro="Examples of projects I've worked on, big and small."
      />
      <BrandsList/>
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
  }
</script>

<style scoped>

</style>