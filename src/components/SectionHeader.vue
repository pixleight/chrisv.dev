<template>
  <header :class="variantClass">
    <slot>
      <h2 class="heading">
        <span aria-hidden="true">{{ emoji }}</span> {{ heading }}
      </h2>
      <p>{{ intro }}</p>
    </slot>
  </header>
</template>

<script>
  export default {
    name: 'SectionHeader',
    props: {
      heading: String,
      intro: String,
      emoji: String,
      variant: String,
    },
    computed: {
      variantClass: ({variant}) => variant ? `variant--${variant}` : null,
    }
  }
</script>

<style scoped>
header {
  @apply relative grid mb-8 border-t-8 border-purple-700 ;

  grid-column-gap: 1rem;
  grid-template-columns: 1fr auto;
  grid-auto-flow: dense;
}

h2 {
  @apply pl-8 pr-4 pb-1 text-white bg-purple-700 flex items-center;

  grid-column: 2;
  white-space: nowrap;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    1rem 100%
  );
}

.heading {
  @apply pl-8 pr-4 pb-1 text-white text-2xl bg-purple-700 flex items-center;

  grid-column: 2;
  white-space: nowrap;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    1rem 100%
  );

  @screen md {
    @apply text-3xl;
  }

  @screen lg {
    @apply text-4xl;
  }
}

p {
  @apply py-2 self-center text-gray-700;
}

.variant--teal {
  @apply border-teal-500;
}

.variant--teal .heading {
  @apply bg-teal-500;
}

.variant--green {
  @apply border-green-500;
}

.variant--green .heading {
  @apply bg-green-500;
}

.variant--blue {
  @apply border-blue-600;
}

.variant--blue .heading {
  @apply bg-blue-600;
}
</style>