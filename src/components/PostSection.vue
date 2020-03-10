<template>
  <section class="mb-4">
    <SectionHeader
      :emoji="emoji"
      :heading="heading"
      :intro="intro"
      :variant="variant"
    />
    <PostGrid :posts="posts" />
  </section>
</template>

<script>
  import SectionHeader from '~/components/SectionHeader';
  import PostGrid from '~/components/PostGrid';

  export default {
    name: 'PostSection',
    props: {
      heading: String,
      intro: String,
      emoji: String,
      variant: String,
      posts: Array,
    },
    components: {
      SectionHeader,
      PostGrid,
    }
  }
</script>

<style scoped>

</style>