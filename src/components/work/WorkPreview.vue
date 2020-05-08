<template>
  <g-link class="sm:row-span-3 md:row-span-1 lg:row-span-3">
    <article class="rounded-lg overflow-hidden bg-gray-light shadow-lg flex flex-col h-full relative">
      <header>
        <g-image src="https://placekitten.com/600/400" />
      </header>
      <main class="flex-1 mt-0 p-2 grid gap-2">
        <h2 class="text-xl self-end relative">
          Project Name
        </h2>
        <p class="col-span-2 row-start-2 text-theme-invert text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <aside class="text-theme-secondary text-xs col-span-2 row-start-1 space-x-1">
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
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  height: 0;
  width: 100%;
  background: var(--color-primary);
  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);
}

a:hover article::after {
  height: 0.5rem;
}
</style>