<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Hero,
    Loader
  }
}
</script>
