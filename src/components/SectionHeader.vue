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
        class="flex items-center pb-1 pl-8 pr-4 text-2xl text-white whitespace-no-wrap heading md:text-3xl lg:text-4x"
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
        class="self-center py-2 text-gray-dark"
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
            return 'border-gray-light';
          default:
            return 'border-purple';
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
            return 'bg-gray-light text-gray-dark';
          default:
            return 'bg-purple';
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