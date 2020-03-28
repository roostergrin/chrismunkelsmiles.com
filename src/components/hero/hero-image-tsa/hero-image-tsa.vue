<template lang='pug' src='./hero-image-tsa.pug'></template>

<script>
export default {
  props: ['props'],
  methods: {
    scrolled ({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$store.dispatch('VIEW_NAV', false)
      }
      if (going === this.$waypointMap.GOING_OUT) {
        this.$store.dispatch('VIEW_NAV', false)
      }
    }
  }
}
</script>
