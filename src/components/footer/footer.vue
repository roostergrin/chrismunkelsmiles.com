<template lang='pug' src='./footer.pug'></template>

<script>
import Icon from 'components/icon/icon'
import ModalContact from 'components/modal/modal-contact/modal-contact'

export default {
  data () {
    return {
      activeModal: false
    }
  },
  computed: {
    props () {
      return this.$store.state.app.footer
    }
  },
  components: {
    Icon,
    ModalContact
  },
  methods: {
    toggleModalContact () {
      this.activeModal = !this.activeModal
      this.activeModal ? document.body.classList.add('body-stop') : document.body.classList.remove('body-stop')
    }
  }
}
</script>
