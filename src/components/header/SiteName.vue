<template>
  <g-link to="/">
    <figure class="overflow-hidden bg-blue-600 mx-auto mb-2 w-24 shadow-xl">
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