<template lang='pug' src='./custom-home-v2-two-choices.pug'></template>

<script>
export default {
  props: ['props'],
  computed: {
    links () {
      console.log(this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  methods: {
    changePage (link) {
      this.$router.push(link)
    }
  }
}
</script>
