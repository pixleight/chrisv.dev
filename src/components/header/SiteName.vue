<template>
  <g-link to="/" class="flex items-center lg:flex-col lg:mb-8">
    <figure class="overflow-hidden bg-blue-800 shadow w-12 h-12 mr-4 lg:shadow-lg lg:mx-auto lg:mb-2 lg:w-24 lg:h-auto">
      <Avatar />
    </figure>
    <span class="sitename text-center text-xl flex justify-center items-center">
      <span class="bracket text-3xl">{</span>
      <span class="address px-1">
        <span class="name">
          <span class="firstname">chris</span>
          <span class="lastname">v</span>
        </span>
        <span class="tld">.dev</span>
      </span>
      <span class="bracket text-3xl">}</span>
    </span>
  </g-link>
</template>

<script>
  import Avatar from '@/components/Avatar'

  export default {
    components: {
      Avatar,
    },
  }
</script>

<style scoped>
  figure {
    border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%
  }
</style>