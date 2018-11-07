<template lang='pug' src='./blog.pug'></template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Icon from 'components/icon/icon'

export default {
  name: 'blog',
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 5000
        },
        navigation: {
          prevEl: '.pages-blog__prev-btn',
          nextEl: '.pages-blog__next-btn'
        },
        pagination: {
          el: '.pages-blog__pagination',
          clickable: true,
          bulletClass: 'pages-blog__bullet',
          bulletActiveClass: 'pages-blog__bullet-active',
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
      allBlogs: [],
      loading: false,
      activeCategories: [],
      activeTags: []
    }
  },
  computed: {
    blog () {
      var blogId = this.$route.params.postId
      return this.$store.state.filter[blogId]
    },
    blogs () {
      return this.$store.state.blog
    }
  },
  components: {
    swiper,
    swiperSlide,
    Icon
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
    }
  },
  created () {
    let fillBlogs = setInterval(() => {
      if (this.blogs.length > 1) {
        console.log(this.blogs[0])
        this.activeCategories = this.blog.categories[0]
        this.activeTags = this.blog.tags[0]
        this.loading = true
        this.allBlogs = this.blogs
        clearInterval(fillBlogs)
      }
    }, 100)
  }
}
</script>
