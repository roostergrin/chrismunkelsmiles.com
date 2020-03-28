<template lang='pug' src='./tab-tsa.pug'></template>

<script>
import TabTsaTMJ from 'components/tab/tab-tsa/tab-tsa-tmj/tab-tsa-tmj'
import TabTsaAirway from 'components/tab/tab-tsa/tab-tsa-airway/tab-tsa-airway'
import TabAboutTech from 'components/tab/tab-about/tab-about-tech/tab-about-tech'
import TabTsaSleepApnea from 'components/tab/tab-tsa/tab-tsa-sleep-apnea/tab-tsa-sleep-apnea'

export default {
  props: ['props'],
  components: {
    TabTsaTMJ,
    TabTsaAirway,
    TabAboutTech,
    TabTsaSleepApnea
  }
}
</script>
