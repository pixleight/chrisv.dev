<template>
  <Layout>
    <article>
      <PostHeading>
        <span class="text-purple">{{ $page.post.title }}</span>
      </PostHeading>
      <main>
        <MarkdownContent :content="$page.post.content" />
      </main>
    </article>
  </Layout>
</template>

<script>
  import PostHeading from '~/components/posts/PostHeading'
  import MarkdownContent from '~/components/posts/MarkdownContent'

  export default {
    components: {
      PostHeading,
      MarkdownContent,
    }
  }
</script>

<style scoped>
</style>

<page-query>
  query ($id: ID!) {
    post: snippet(id: $id) {
      id
      title
      excerpt
      content
    }
  }
</page-query>