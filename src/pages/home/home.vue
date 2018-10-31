<template lang='pug' src='./home.pug'></template>

<script>
import HeroHome from 'components/hero/hero-home/hero-home'
import Loader from 'components/loader/loader'
import CustomHomeWelcome from 'components/custom/custom-home-welcome/custom-home-welcome'
import CustomHomeWhy from 'components/custom/custom-home-why/custom-home-why'
import CustomHomeVideo from 'components/custom/custom-home-video/custom-home-video'
import CustomHomeAppointment from 'components/custom/custom-home-appointment/custom-home-appointment'
import CustomHomeLearn from 'components/custom/custom-home-learn/custom-home-learn'
import CustomHomeTestimonial from 'components/custom/custom-home-testimonial/custom-home-testimonial'

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
    HeroHome,
    Loader,
    CustomHomeWelcome,
    CustomHomeWhy,
    CustomHomeVideo,
    CustomHomeAppointment,
    CustomHomeLearn,
    CustomHomeTestimonial
  }
}
</script>
