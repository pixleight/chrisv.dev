<template>
  <g-link
    :href="post.path"
    :aria-label="post.title"
    class="transition-all duration-150 ease-in transform sm:row-span-3 hover:-translate-y-3 hover:shadow-xl">
    <article class="relative flex flex-col h-full overflow-hidden text-gray-200 bg-gray-900 rounded-lg shadow-lg dark:bg-gray-200 dark:text-gray-800">
      <header>
        <cld-image
          :publicId="assetUrl"
          :alt="post.title"
          responsive="width"
          width="600"
          height="315"
          :lazy="true"
          placeholder="color"
        >
          <cld-transformation
            width="600"
            height="315"
            crop="lfill"
            quality="auto"
            fetchFormat="auto"
          />
        </cld-image>
      </header>
      <main class="grid flex-1 gap-2 p-2 mt-0">
        <h2 class="relative self-end text-xl text-yellow-500 dark:text-indigo-800">
          {{ post.title }}
        </h2>
        <p class="col-span-2 row-start-2 text-sm text-gray-300 dark:text-gray-700">
          {{ post.excerpt }}
        </p>
        <aside v-if="!!post.tags" class="col-span-2 row-start-1 space-x-1 text-xs text-teal-500 dark:text-teal-700">
          <span v-for="(tag, index) in post.tags" :key="index">
            {{ tag.title }}
          </span>
        </aside>
      </main>
    </article>
  </g-link>
</template>

<script>
  export default {
    props: {
      post: Object,
    },
    computed: {
      assetUrl() {
        // Extract the cloudinary path out of the full url:
        // Example: "https://res.cloudinary.com/chrisvdev/image/upload/v1589407095/work/quarantinio_wfrbum.jpg"
        // @returns 'work/quarantinio_wfrbum.jpg'
        return this.post.image.match(/\/v\d+\/(.+)$/)[1]
      }
    },
  }
</script>

<style scoped>
main {
  grid-template-columns: 1fr auto;
}

article::after {
  @apply block absolute bottom-0 h-0 w-full bg-yellow-500 transition-all duration-200 ease-out;

  content: '';
}

a:hover article::after {
  height: 0.5rem;
}
</style>