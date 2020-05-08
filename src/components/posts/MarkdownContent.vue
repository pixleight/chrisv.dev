<template>
  <div class="markdown" v-html="content"></div>
</template>

<script>
  export default {
    props: {
      content: String,
    }
  }
</script>

<style scoped>
/* .markdown >>> blockquote:not(:last-child),
.markdown >>> dl:not(:last-child),
.markdown >>> ol:not(:last-child),
.markdown >>> p:not(:last-child),
.markdown >>> pre:not(:last-child),
.markdown >>> table:not(:last-child),
.markdown >>> ul:not(:last-child) {
  @apply mb-6;
} */

.markdown >>> pre {
  @apply overflow-auto p-4 text-gray-light bg-gray-dark rounded;
}
</style>