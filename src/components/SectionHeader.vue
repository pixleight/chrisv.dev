<template>
  <header :class="[variantClass, {'flip': flip }]">
    <slot>
      <h2 class="heading">
        <span v-if="emoji" aria-hidden="true">{{ emoji }}</span> {{ heading }}
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
      flip: Boolean,
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

.flip {
  grid-template-columns: auto 1fr;
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

.flip .heading {
  @apply pr-8 pl-4;

  grid-column: 1;
  clip-path: polygon(
    0 0,
    100% 0,
    calc(100% - 1rem) 100%,
    0 100%
  );
}

span {
  @apply pr-2;
}

p {
  @apply py-2 self-center text-gray-700;
}

.flip p {
  @apply text-right;
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

.variant--invert {
  @apply border-gray-300;
}

.variant--invert .heading {
  @apply bg-gray-300 text-gray-900;
}

.variant--invert p {
  @apply text-gray-300;
}
</style>