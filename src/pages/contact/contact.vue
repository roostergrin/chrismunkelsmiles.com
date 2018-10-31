<template lang='pug' src='./contact.pug'></template>

<script>
import HeroImage from 'components/hero/hero-image/hero-image'
import Loader from 'components/loader/loader'
import CustomContactForm from 'components/custom/custom-contact-form/custom-contact-form'
import CustomContactMap from 'components/custom/custom-contact-map/custom-contact-map'

export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages['contact']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    HeroImage,
    Loader,
    CustomContactForm,
    CustomContactMap
  }
}
</script>
