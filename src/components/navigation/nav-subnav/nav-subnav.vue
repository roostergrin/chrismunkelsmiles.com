<template lang='pug' src='./nav-subnav.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  methods: {
    changeTab (section, i) {
      this.$router.replace(section.link)
      setTimeout(() => { this.$scrollTo('.nav-subnav__scroll-point', { offset: -80 }) }, 500)
    }
  },
  components: {
    Icon
  }
}
</script>
