<template lang='pug' src='./tab-treatments-cleaning.pug'></template>

<script>
export default {
  props: ['props'],
  computed: {
    blog () {
      return this.$store.state.blog.data
    }
  },
  filters: {
    truncate: function (text, length, suffix) {
      return text.substring(0, length) + suffix
    }
  }
}
</script>
