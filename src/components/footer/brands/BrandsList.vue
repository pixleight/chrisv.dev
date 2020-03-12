<template>
  <section class="bg-gray-300 overflow-x-auto">
    <div class="flex flex-wrap justify-center">
      <div class="p-4 flex items-center justify-center" v-for="brand in $static.brands.edges" :key="brand.node.id">
        <g-image :src="brand.node.logo" :alt="brand.node.title" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
img {
  filter: grayscale(100%);
  max-height: 3rem;
  max-width: 8rem;
}
</style>

<static-query>
query {
  brands: allBrand(order: ASC, sortBy: "title") {
    edges {
      node {
        id
        title
        logo
      }
    }
  }
}
</static-query>