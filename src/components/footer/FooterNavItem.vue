<template>
  <li>
    <g-link :to="to" class="inline-block px-2 py-1 uppercase relative hover:text-gray-dark transition-colors duration-200 ease-out">
      <span class="relative z-10">
        <slot />
      </span>
    </g-link>
  </li>
</template>

<script>
  export default {
    props: {
      to: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style scoped>
a::before {
  @apply block absolute top-0 bottom-0 w-0 bg-yellow-500duration-200 ease-out;
  content: '';
  left: 50%;
  transform: translateX(-50%) skewX(25deg);
  transition-property: width;
}

a:hover::before {
  @apply w-full;
}
</style>