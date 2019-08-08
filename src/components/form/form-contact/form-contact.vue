<template lang='pug' src='./form-contact.pug'></template>

<script>
import axios from 'axios'
import api from 'api'

export default {
  data: () => {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      postUrl: api + '/rg-mail/v1/request-contact',
      formSubmitted: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.onSubmit()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    onSubmit () {
      axios.post(this.postUrl, {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
      .then(res => {
        setTimeout(() => {
          window.location = '/thank-you'
        }, 500)
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
