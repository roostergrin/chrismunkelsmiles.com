<template lang='pug' src='./custom-faq-row.pug'></template>

<script>
export default {
  data () {
    return {
      loading: false,
      allBlogs: []
    }
  },
  props: ['props'],
  computed: {
    blogs () {
      return this.$store.state.blog
    }
  },
  methods: {
    truncatePost (i) {
      let text = i
      let truncText = []
      if (text.length >= 320) {
        truncText = text.slice(0, 320)
        return truncText + '...'
      } else {
        return text
      }
    }
  },
  created () {
    let fillBlogs = setInterval(() => {
      if (this.blogs.length > 1) {
        this.loading = true
        this.allBlogs = this.blogs
        clearInterval(fillBlogs)
      }
    }, 100)
  }
}
</script>
