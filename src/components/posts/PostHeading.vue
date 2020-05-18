<template>
  <header>
    <h1 class="text-2xl md:text-4xl">
      <slot></slot>
      <hr class="mt-0 border-0 rounded-full bg-gray-medium"/>
    </h1>
  </header>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  hr {
    height: 3px;
  }
</style>