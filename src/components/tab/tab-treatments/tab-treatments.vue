<template lang='pug' src='./tab-treatments.pug'></template>

<script>
import TabTreatmentsCleaning from 'components/tab/tab-treatments/tab-treatments-cleaning/tab-treatments-cleaning'
import TabTreatmentsCosmetic from 'components/tab/tab-treatments/tab-treatments-cosmetic/tab-treatments-cosmetic'
import TabTreatmentsRestorations from 'components/tab/tab-treatments/tab-treatments-restorations/tab-treatments-restorations'
import TabTreatmentsTMJ from 'components/tab/tab-treatments/tab-treatments-tmj/tab-treatments-tmj'
import TabTreatmentsKids from 'components/tab/tab-treatments/tab-treatments-kids/tab-treatments-kids'
import TabTreatmentsAirway from 'components/tab/tab-treatments/tab-treatments-airway/tab-treatments-airway'

export default {
  props: ['props'],
  components: {
    TabTreatmentsCleaning,
    TabTreatmentsCosmetic,
    TabTreatmentsRestorations,
    TabTreatmentsTMJ,
    TabTreatmentsKids,
    TabTreatmentsAirway
  }
}
</script>
