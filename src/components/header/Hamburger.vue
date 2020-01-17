<template>
  <button class="relative inline-block sm:hidden cursor-pointer focus:outline-none" :class="{'is-active': isActive}" @click="$emit('toggle')">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
  export default {
    props: {
      isActive: Boolean,
    },
  }
</script>

<style scoped>
  button {
    height: 2rem;
    width: 2.5rem;
  }

  span {
    position: absolute;
    display: block;
    width: 100%;
    background: #fff;
    height: 0.2rem;
    border-radius: 9999px;
    transition:
      top 75ms 150ms,
      transform 75ms,
      opacity 75ms 150ms;
    transition-timing-function: cubic-bezier(1, 0.05, 0.62, 1.78);
  }
    .is-active span {
      transition:
        top 75ms,
        transform 75ms 150ms,
        opacity 75ms;
      transition-timing-function: cubic-bezier(1, 0.05, 0.62, 1.78);
    }

  span:first-of-type {
    top: 0;
  }
    .is-active span:first-of-type {
      top: 50%;
      transform: rotate(45deg);
    }

  span:nth-of-type(2) {
    top: calc(50% - 0.1rem);
  }
    .is-active span:nth-of-type(2) {
      opacity: 0;
    }

  span:nth-of-type(3) {
    top: calc(100% - 0.2rem);
  }
    .is-active span:nth-of-type(3) {
      top: 50%;
      transform: rotate(-45deg);
    }
</style>