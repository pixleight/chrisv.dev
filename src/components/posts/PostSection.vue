<template>
  <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 grid-flow-row-dense">
    <h2 class="ml-3 -mr-3 px-4 py-1 text-2xl text-indigo-900 bg-yellow-500 sm:col-span-2 md:col-span-1 lg:col-span-2 transform -skew-x-15 shadow-sharp rounded">
      <span class="inline-block transform skew-x-15">Section Heading</span>
    </h2>
    <p class="sm:col-start-2 md:col-start-1 lg:col-start-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <PostPreview />
  </section>
</template>

<script>
  import PostPreview from '@/components/posts/PostPreview'

  export default {
    components: {
      PostPreview,
    }
  }
</script>

<style scoped>
  h2 {
    justify-self: end;
  }
</style>