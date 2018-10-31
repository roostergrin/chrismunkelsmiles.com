<template lang='pug' src='./faq.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroImage from 'components/hero/hero-image/hero-image'
import CustomFAQRow from 'components/custom/custom-faq-row/custom-faq-row'

export default {
  name: 'faq',
  computed: {
    props () {
      return this.$store.state.pages.faq
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    HeroImage,
    Loader,
    CustomFAQRow
  }
}
</script>
