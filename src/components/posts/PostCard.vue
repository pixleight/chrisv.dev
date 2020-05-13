<template>
  <g-link
    :href="post.path"
    :aria-label="post.title"
    class="sm:row-span-3 md:row-span-1 lg:row-span-3 transition-all duration-150 ease-in transform hover:-translate-y-3 hover:shadow-xl">
    <article class="rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-800 shadow-lg flex flex-col h-full relative">
      <header>
        <!-- <g-image :src="require(`!!assets-loader!~/assets${post.image}`)" width="500" :alt="post.title" /> -->
        <!-- <c-image :src="post.image" width="1200" height="630" :alt="post.title" crop="lfill" /> -->
        <cld-image
          :publicId="assetUrl"
          responsive="width"
          width="auto"
        />
      </header>
      <main class="flex-1 mt-0 p-2 grid gap-2">
        <h2 class="text-xl self-end relative text-yellow-500 dark:text-indigo-800">
          {{ post.title }}
        </h2>
        <p class="col-span-2 row-start-2 text-gray-300 dark:text-gray-700 text-sm">
          {{ post.excerpt }}
        </p>
        <aside v-if="!!post.tags" class="text-teal-500 dark:text-teal-700 text-xs col-span-2 row-start-1 space-x-1">
          <span v-for="(tag, index) in post.tags" :key="index">
            {{ tag.tag }}
          </span>
        </aside>
      </main>
    </article>
  </g-link>
</template>

<script>
  import CImage from '~/components/CImage'
  export default {
    props: {
      post: Object,
    },
    components: {
      CImage,
    },
    computed: {
      assetUrl() {
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