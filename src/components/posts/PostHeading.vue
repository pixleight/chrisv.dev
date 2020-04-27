<template>
  <header>
    <h1 class="text-2xl md:text-4xl">
      <slot></slot>
      <hr class="mt-0 bg-gray-500 border-0 rounded-full"/>
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