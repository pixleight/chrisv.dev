<template>
  <button @click="toggle()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        class="transition-all duration-150 fill-current stroke-current stroke-0 burger ease"
        :class="{'stroke-2 text-yellow-900': active}"
        d="M3,12 C3,11.4477 3.44772,11 4,11 L20,11 C20.5523,11 21,11.4477 21,12 C21,12.5523 20.5523,13 20,13 L4,13 C3.44772,13 3,12.5523 3,12 Z"
      />
      <path
        class="transition-all duration-150 fill-current stroke-current stroke-0 buns ease"
        :class="{'stroke-2 text-yellow-700': active}"
        d="M3,18 C3,17.4477 3.44772,17 4,17 L20,17 C20.5523,17 21,17.4477 21,18 C21,18.5523 20.5523,19 20,19 L4,19 C3.44772,19 3,18.5523 3,18 Z"
      />
      <path
        class="transition-all duration-150 fill-current stroke-current stroke-0 buns ease"
        :class="{'stroke-2 text-yellow-700': active}"
        d="M3,6 C3,5.44772 3.44772,5 4,5 L20,5 C20.5523,5 21,5.44772 21,6 C21,6.55228 20.5523,7 20,7 L4,7 C3.44772,7 3,6.55228 3,6 Z"
      />
      <polygon
        class="transition-all duration-150 opacity-0 fill-current stroke-current stroke-0 cheese ease"
        :class="{'stroke-2 text-yellow-500 opacity-100': active}"
        points="5 11 9 16 13 11"
      />
    </svg>
  </button>
</template>

<script>
  export default {
    data: () => ({
      active: false,
    }),
    methods: {
      toggle() {
        this.$emit('toggle', !this.active);
        this.active = !this.active;
      },
    },
  }
</script>

<style scoped>
button:hover .buns,
button:hover .cheese {
  @apply text-yellow-700;
}

button:hover .burger {
  @apply text-yellow-900;
}

button:hover .cheese {
  @apply text-yellow-500 opacity-100;
}
</style>