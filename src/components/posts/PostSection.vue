<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-8 grid-flow-row-dense">
    <h2 class="ml-3 -mr-3 px-4 py-1 text-2xl text-indigo-900 bg-yellow-500 sm:col-span-2 lg:col-span-2 transform -skew-x-15 shadow-sharp-right rounded">
      <span class="inline-block transform skew-x-15">{{ heading }}</span>
    </h2>
    <p class="post-section__intro">
      Examples of projects I've worked on, big and small.
    </p>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </section>
</template>

<script>
  import PostCard from '@/components/posts/PostCard'

  export default {
    props: {
      heading: String,
      intro: String,
      posts: Array,
    },
    components: {
      PostCard,
    }
  }
</script>

<style scoped>
  h2 {
    justify-self: end;
  }

  section:nth-child(2n+1) .post-section__intro {
    @screen sm {
      @apply col-start-2;
    }
  }
</style>