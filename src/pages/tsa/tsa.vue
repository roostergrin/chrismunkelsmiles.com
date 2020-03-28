<template lang='pug' src='./tsa.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroImageTsa from 'components/hero/hero-image-tsa/hero-image-tsa'
import NavSubnav from 'components/navigation/nav-subnav/nav-subnav'
import TabTsa from 'components/tab/tab-tsa/tab-tsa'

export default {
  name: 'tsa',
  computed: {
    props () {
      return this.$store.state.pages['tmj-sleep-therapy-airway-orthodontics']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    HeroImageTsa,
    Loader,
    NavSubnav,
    TabTsa
  }
}
</script>
