<template>
  <g-image :src="fullUrl" :alt="alt" />
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
      width: [String, Number],
      height: [String, Number],
      crop: {
        type: String,
        default: 'scale',
        validator: (value) => {
          return ['scale', 'crop', 'fit', 'fill', 'lfill'].indexOf(value) !== -1
        }
      }
    },
    computed: {
      baseUrl() {
        return this.src.split('upload')[0] + 'upload'
      },
      assetUrl() {
        return this.src.split('upload/')[1]
      },
      transformParams() {
        let params = []

        if (!!this.width) {
          params.push(`w_${this.width}`)
        }
        if (!!this.height) {
          params.push(`h_${this.height}`)
        }

        if(!!params.length) {
          params.push(`c_${this.crop}`)
        }

        return params.join(',')
      },
      fullUrl() {
        const { baseUrl, transformParams, assetUrl } = this;

        return `${baseUrl}/${transformParams}/${assetUrl}`
      }
    }
  }
</script>

<style scoped>

</style>