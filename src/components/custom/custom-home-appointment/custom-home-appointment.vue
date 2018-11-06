<template lang='pug' src='./custom-home-appointment.pug'></template>

<script>
import ModalContact from 'components/modal/modal-contact/modal-contact'

export default {
  data () {
    return {
      activeModal: false
    }
  },
  props: ['props'],
  components: {
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
