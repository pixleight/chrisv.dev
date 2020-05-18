<template>
  <g-link class="flex block" :to="post.path">
    <article class="relative flex flex-col w-full overflow-hidden rounded-lg shadow bg-gray-medium hover:shadow-xl">
      <h3 class="relative z-10 px-4 pt-2 pb-3 mt-auto mb-4 mr-4 text-white">
        <g-link :to="post.path">
          <span class="block">{{ post.title }}</span>
        </g-link>
      </h3>
      <g-image :src="post.avatar" class="absolute inset-0 object-cover w-full" />
    </article>
  </g-link>
</template>

<script>
  export default {
    props: {
      post: Object,
    }
  }
</script>

<style scoped>
article {
  transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

img {
  transition: transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
}

article:hover {
  & img {
    transform: scale(1.3) rotate(7deg);
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  & h3 {
    &::before {
      clip-path: polygon(0 0.5rem, 100% 0, calc(100% - 0.5rem) calc(100% - 0.5rem), 0 100%);
    }
  }
}

h3 {
  &::before,
  &::after {
    @apply block absolute z-0 inset-0;
    content: '';
  }

  &::before {
    @apply bg-indigo-900;
    z-index: -1;
    transition: clip-path 250ms;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    clip-path: polygon(0 0.5rem, 0 0.5rem, 0 0.5rem, 0 100%);
  }

  &::after {
    @apply bg-black;
    opacity: 0.8;
    z-index: -2;
    clip-path: polygon(0 0.5rem, 100% 0, calc(100% - 0.5rem) calc(100% - 0.5rem), 0 100%);
  }

  & span {
    transform: rotate(-2deg);
  }
}
</style>