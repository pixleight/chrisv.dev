<template>
  <section class="grid grid-flow-row-dense grid-cols-1 gap-8 sm:grid-cols-2">
    <h2 class="px-4 py-1 ml-3 -mr-3 text-2xl text-indigo-900 transform bg-yellow-500 rounded sm:col-span-2 lg:col-span-2 -skew-x-15 shadow-sharp-right">
      <span class="inline-block transform skew-x-15">{{ heading }}</span>
    </h2>
    <p class="post-section__intro">
      {{ intro }}
    </p>
    <PostCard v-for="post in postNodes" :key="post.id" :post="post" :image-gravity="imageGravity" />
  </section>
</template>

<script>
  import PostCard from '@/components/posts/PostCard'

  export default {
    props: {
      heading: String,
      intro: String,
      posts: Array,
      imageGravity: {
        type: String,
        default: 'center',
      },
    },
    components: {
      PostCard,
    },
    computed: {
      postNodes() {
        return this.posts.map(post => post.node || post)
      }
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