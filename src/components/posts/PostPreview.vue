<template>
  <g-link class="sm:row-span-3 md:row-span-1 lg:row-span-3 transition-all duration-150 ease-in transform hover:-translate-y-3 hover:shadow-xl">
    <article class="rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-200 text-gray-200 dark:text-gray-800 shadow-lg flex flex-col h-full relative">
      <header>
        <g-image src="https://placekitten.com/600/400" />
      </header>
      <main class="flex-1 mt-0 p-2 grid gap-2">
        <h2 class="text-xl self-end relative text-yellow-500 dark:text-indigo-800">
          Project Name
        </h2>
        <p class="col-span-2 row-start-2 text-gray-300 dark:text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <aside class="text-teal-500 dark:text-teal-700 text-xs col-span-2 row-start-1 space-x-1">
          <span>Vue</span>
          <span>Craft</span>
          <span>CSS</span>
          <span>HTML</span>
          <span>Foo</span>
        </aside>
      </main>
    </article>
  </g-link>
</template>

<script>
  export default {
    
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