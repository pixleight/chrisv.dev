<template>
  <div class="wrapper min-h-screen text-white bg-gray-900">
    <header class="bg-purple-900">
      <div class="fixed flex inset-0 p-4 w-48 border-t-4 border-b-4 border-purple-600">
        <section class="relative z-10">
          <h1>Header</h1>
        </section>
      </div>
    </header>
    <main class="p-4">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style scoped>
  .wrapper {
    display: grid;

    @screen sm {
      grid-template-columns: 12rem auto;
      grid-column-gap: 6vh;
    }
  }

  header div::after {
    @apply absolute block inset-0 w-full bg-purple-900 border-t-4 border-b-4 border-purple-600;

    top: -0.25rem;
    bottom: -0.25rem;
    content: '';
    transform: skewX(-3deg);
    transform-origin: bottom right;
  }

  header section {
    @apply w-full;

    transform: skewX(-3deg);
    transform-origin: bottom right;
  }

  header section > * {
    transform: skewX(3deg);
  }
</style>
