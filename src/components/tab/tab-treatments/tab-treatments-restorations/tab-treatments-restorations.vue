<template lang='pug' src='./tab-treatments-restorations.pug'></template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Icon from 'components/icon/icon'

export default {
  props: ['props'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        autoplay: {
          delay: 5000
        },
        navigation: {
          prevEl: '.tab-treatments-restorations__prev-btn',
          nextEl: '.tab-treatments-restorations__next-btn'
        },
        pagination: {
          el: '.tab-treatments-restorations__pagination',
          clickable: true,
          bulletClass: 'tab-treatments-restorations__bullet',
          bulletActiveClass: 'tab-treatments-restorations__bullet-active',
          renderBullet: function (index, bulletClass) {
            return '<div class="' + bulletClass + '"></div>'
          }
        },
        breakpoints: {
          768: {
            slidesPerView: 1
          }
        }
      },
      loading: false,
      allBlogs: [],
      numOfServices: false
    }
  },
  computed: {
    blogs () {
      return this.$store.state.blog
    }
  },
  methods: {
    truncateService (i) {
      let text = i
      let truncText = []
      if (text.length >= 165) {
        truncText = text.slice(0, 165)
        return truncText + '...'
      } else {
        return text
      }
    },
    truncatePost (i) {
      let text = i
      let truncText = []
      if (text.length >= 350) {
        truncText = text.slice(0, 350)
        return truncText + '...'
      } else {
        return text
      }
    },
    visitBlog (slug) {
      this.$router.push(slug)
      setTimeout(() => { this.$scrollTo('.pages-blog__background', { offset: -132 }) }, 500)
    }
  },
  components: {
    swiper,
    swiperSlide,
    Icon
  },
  created () {
    let fillBlogs = setInterval(() => {
      if (this.blogs.length > 1) {
        let selectedBlogs = this.blogs.filter(blog => blog.categories.includes(4))
        let selectedServices = selectedBlogs.filter(blog => !blog.tags.includes(10))
        this.loading = true
        this.allBlogs = selectedBlogs
        this.numOfServices = selectedServices.length
        clearInterval(fillBlogs)
      }
    }, 100)
  }
}
</script>
