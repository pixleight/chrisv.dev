<template>
  <header
    class="relative grid mb-8 border-t-8"
    :class="[
      headerVariantClass,
      {
        'flip': !!flip,
      }
    ]"
  >
    <slot>
      <h2
        class="heading flex items-center pl-8 pr-4 pb-1 text-white whitespace-no-wrap text-2xl md:text-3xl lg:text-4x"
        :class="[
          headingVariantClass,
          {
            'pr-8 pl-4': !!flip,
          }
        ]"
      >
        <span class="pr-2" v-if="emoji" aria-hidden="true">{{ emoji }}</span> {{ heading }}
      </h2>
      <p
        class="py-2 self-center text-gray-700"
        :class="{
          'text-right': !!flip,
          'text-gray': !!(variant == 'invert'),
        }"
      >{{ intro }}</p>
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
      headerVariantClass: ({variant}) => {
        switch (variant) {
          case 'teal':
            return 'border-teal-500';
          case 'green':
            return 'border-green-500';
          case 'blue':
            return 'border-blue-600';
          case 'invert':
            return 'border-gray-300';
          default:
            return 'border-purple-700';
        }
      },
      headingVariantClass: ({variant}) => {
        switch (variant) {
          case 'teal':
            return 'bg-teal-500';
          case 'green':
            return 'bg-green-500';
          case 'blue':
            return 'bg-blue-600';
          case 'invert':
            return 'bg-gray-300 text-gray-900';
          default:
            return 'bg-purple-700';
        }
      },
    }
  }
</script>

<style scoped>
header {
  grid-column-gap: 1rem;
  grid-template-columns: 1fr auto;
  grid-auto-flow: dense;
}

.flip {
  grid-template-columns: auto 1fr;
}

.heading {
  grid-column: 2;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    1rem 100%
  );
}

.flip .heading {
  grid-column: 1;
  clip-path: polygon(
    0 0,
    100% 0,
    calc(100% - 1rem) 100%,
    0 100%
  );
}
</style>