<template lang='pug' src='./treatments.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroImage from 'components/hero/hero-image/hero-image'
import NavSubnav from 'components/navigation/nav-subnav/nav-subnav'
import TabTreatments from 'components/tab/tab-treatments/tab-treatments'

export default {
  name: 'treatments',
  computed: {
    props () {
      return this.$store.state.pages.treatments
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    HeroImage,
    Loader,
    NavSubnav,
    TabTreatments
  }
}
</script>
