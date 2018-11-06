<template lang='pug' src='./custom-home-learn.pug'></template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      loading: false,
      allBlogs: []
    }
  },
  computed: {
    blogs () {
      return this.$store.state.blog
    }
  },
  methods: {
    truncateService (i) {
      let text = i
      let truncText = []
      if (text.length >= 165) {
        truncText = text.slice(0, 165)
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
