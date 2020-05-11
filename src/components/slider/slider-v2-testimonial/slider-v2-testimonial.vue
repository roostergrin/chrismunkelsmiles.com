<template lang='pug' src='./slider-v2-testimonial.pug'></template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.slider-v2-testimonial__pagination',
          clickable: true,
          bulletClass: 'slider-v2-testimonial__bullet',
          bulletActiveClass: 'slider-v2-testimonial__bullet-active',
          renderBullet: function (index, bulletClass) {
            return '<div class="' + bulletClass + '"></div>'
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
