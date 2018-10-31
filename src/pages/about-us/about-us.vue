<template lang='pug' src='./about-us.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroImage from 'components/hero/hero-image/hero-image'
import NavSubnav from 'components/navigation/nav-subnav/nav-subnav'
import TabAbout from 'components/tab/tab-about/tab-about'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['about-us']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    HeroImage,
    NavSubnav,
    TabAbout
  }
}
</script>
