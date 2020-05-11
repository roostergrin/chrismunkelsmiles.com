<template lang='pug' src='./nav-desktop.pug'></template>

<script>
import Icon from 'components/icon/icon'
import ModalContact from 'components/modal/modal-contact/modal-contact'

export default {
  data () {
    return {
      activeMenu: false,
      activeModal: false
    }
  },
  computed: {
    props () {
      return this.$store.state.app.nav
    },
    links () {
      return this.$router.options.routes
    }
  },
  components: {
    Icon,
    ModalContact
  },
  methods: {
    changePage (link) {
      this.$router.push(link)
      this.activeMenu = false
      this.activeMenu || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
      if (this.$route.hash !== '') {
        setTimeout(() => { this.$scrollTo('.nav-subnav__scroll-point', { offset: -80 }) }, 500)
      }
    },
    toggleMenu () {
      this.activeMenu = !this.activeMenu
      this.activeMenu || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    clearMenu () {
      this.activeMenu = false
      this.activeMenu || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    toggleModalContact () {
      this.activeModal = !this.activeModal
      this.activeMenu || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  }
}
</script>
