<template lang='pug' src='./nav-mobile.pug'></template>

<script>
import Icon from 'components/icon/icon'
import ModalContact from 'components/modal/modal-contact/modal-contact'

export default {
  data () {
    return {
      active: false,
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
  methods: {
    toggleMenu () {
      this.active = !this.active
      this.active || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    },
    toggleModalContact () {
      this.activeModal = !this.activeModal
      this.active || this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  },
  components: {
    Icon,
    ModalContact
  }
}
</script>
