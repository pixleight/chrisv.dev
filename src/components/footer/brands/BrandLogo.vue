<template>
  <cld-image
    :publicId="assetUrl"
    :alt="alt"
    responsive="width"
    width="192"
    height="64"
    crop="pad"
    :lazy="true"
    placeholder="color"
    effect="grayscale"
  >
  </cld-image>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
    computed: {
      assetUrl() {
        // Extract the cloudinary path out of the full url:
        // Example: "https://res.cloudinary.com/chrisvdev/image/upload/v1589407095/work/quarantinio_wfrbum.jpg"
        // @returns 'work/quarantinio_wfrbum.jpg'
        return this.src.match(/\/v\d+\/(.+)$/)[1]
      }
    },
  }
</script>

<style scoped>

</style>