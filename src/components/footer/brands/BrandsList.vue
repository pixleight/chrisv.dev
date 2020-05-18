<template>
  <section class="p-4 bg-gray-300">
    <h4 class="mb-4 tracking-wider text-center text-gray-700 uppercase">
      Brands I've Worked With
    </h4>
    <div class="container mx-auto overflow-x-hidden">
      <ul class="flex py-4 overflow-x-scroll md:overflow-x-visible md:gap-4 md:grid md:grid-cols-5">
        <li
          v-for="brand in $static.brands.edges"
          :key="brand.node.id"
          class="p-4 md:p-0"
        >
          <BrandLogo
            :src="brand.node.logo"
            :alt="brand.node.title"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import BrandLogo from './BrandLogo'

  export default {
    components: {
      BrandLogo,
    },
  }
</script>

<style scoped>
ul {
  scroll-padding: 0 50%;
  scroll-snap-type: x mandatory;
}

li {
  scroll-snap-align: center;
  min-width: 10rem;

  @screen md {
    min-width: auto;
  }
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