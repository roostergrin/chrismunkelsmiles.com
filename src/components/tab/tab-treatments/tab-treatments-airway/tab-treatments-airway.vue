<template lang='pug' src='./tab-treatments-airway.pug'></template>

<script>
export default {
  props: ['props'],
  computed: {
    blog () {
      return this.$store.state.blog.data
    }
  }
}
</script>
