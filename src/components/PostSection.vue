<template>
  <section class="post-section">
    <SectionHeader
      :emoji="emoji"
      :heading="heading"
      :intro="intro"
      :variant="variant"
    />
    <div class="post-section__grid">
      <Snippet v-for="post in posts" :key="post.node.id" :post="post.node" />
    </div>
  </section>
</template>

<script>
  import SectionHeader from '~/components/SectionHeader';
  import Snippet from '~/components/Snippet';

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
      Snippet,
    }
  }
</script>

<style scoped>
.post-section__grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-auto-rows: 15rem;
  grid-auto-flow: dense;
  grid-gap: 2rem;
}
</style>