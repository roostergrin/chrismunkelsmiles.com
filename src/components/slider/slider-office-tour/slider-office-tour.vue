<template lang='pug' src='./slider-office-tour.pug'></template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        speed: 300,
        autoplay: {
          delay: 5000
        },
        navigation: {
          prevEl: '.slider-office-tour__arrow-prev',
          nextEl: '.slider-office-tour__arrow-next'
        },
        breakpoints: {
          768: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Icon
  }
}
</script>
