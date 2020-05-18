<template>
  <g-link to="/" class="flex items-center lg:flex-col lg:mb-8">
    <figure class="w-12 h-12 mr-4 overflow-hidden bg-blue-800 shadow lg:shadow-lg lg:mx-auto lg:mb-2 lg:w-24 lg:h-auto">
      <Avatar />
    </figure>
    <span class="flex items-center justify-center text-xl text-center sitename">
      <span class="text-3xl bracket">{</span>
      <span class="px-1 address">
        <span class="name">
          <span class="firstname">chris</span>
          <span class="lastname">v</span>
        </span>
        <span class="tld">.dev</span>
      </span>
      <span class="text-3xl bracket">}</span>
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