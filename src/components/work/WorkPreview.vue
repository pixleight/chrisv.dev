<template>
  <g-link class="sm:row-span-3 md:row-span-1 lg:row-span-3">
    <article class="relative flex flex-col h-full overflow-hidden rounded-lg shadow-lg bg-gray-light">
      <header>
        <g-image src="https://placekitten.com/600/400" />
      </header>
      <main class="grid flex-1 gap-2 p-2 mt-0">
        <h2 class="relative self-end text-xl">
          Project Name
        </h2>
        <p class="col-span-2 row-start-2 text-sm text-theme-invert">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <aside class="col-span-2 row-start-1 space-x-1 text-xs text-theme-secondary">
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