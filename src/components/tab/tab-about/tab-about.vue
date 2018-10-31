<template lang='pug' src='./tab-about.pug'></template>

<script>
import TabAboutDoctor from 'components/tab/tab-about/tab-about-doctor/tab-about-doctor'
import TabAboutTeam from 'components/tab/tab-about/tab-about-team/tab-about-team'
import TabAboutTech from 'components/tab/tab-about/tab-about-tech/tab-about-tech'
import TabAboutOffice from 'components/tab/tab-about/tab-about-office/tab-about-office'

export default {
  props: ['props'],
  components: {
    TabAboutDoctor,
    TabAboutTeam,
    TabAboutTech,
    TabAboutOffice
  }
}
</script>
