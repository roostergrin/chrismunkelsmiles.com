<template lang='pug' src='./home-v2.pug'></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'
import Loader from 'components/loader/loader'
import CustomHomeV2Welcome from 'components/custom/custom-home-v2-welcome/custom-home-v2-welcome'
import CustomHomeV2TwoChoices from 'components/custom/custom-home-v2-two-choices/custom-home-v2-two-choices'
import CustomHomeWhy from 'components/custom/custom-home-why/custom-home-why'
import CustomHomeAppointment from 'components/custom/custom-home-appointment/custom-home-appointment'
import CustomHomeV2Learn from 'components/custom/custom-home-v2-learn/custom-home-v2-learn'
import CustomHomeV2Testimonial from 'components/custom/custom-home-v2-testimonial/custom-home-v2-testimonial'

export default {
  name: 'home-v2',
  computed: {
    props () {
      return this.$store.state.pages['home-v2']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    HeroHome,
    Loader,
    CustomHomeV2Welcome,
    CustomHomeV2TwoChoices,
    CustomHomeWhy,
    CustomHomeAppointment,
    CustomHomeV2Learn,
    CustomHomeV2Testimonial
  }
}
</script>
