<template lang='pug' src='./tab-treatments.pug'></template>

<script>
import TabTreatmentsCleaning from 'components/tab/tab-treatments/tab-treatments-cleaning/tab-treatments-cleaning'
import TabTreatmentsCosmetic from 'components/tab/tab-treatments/tab-treatments-cosmetic/tab-treatments-cosmetic'
import TabTreatmentsRestorations from 'components/tab/tab-treatments/tab-treatments-restorations/tab-treatments-restorations'
import TabTreatmentsKids from 'components/tab/tab-treatments/tab-treatments-kids/tab-treatments-kids'

export default {
  props: ['props'],
  components: {
    TabTreatmentsCleaning,
    TabTreatmentsCosmetic,
    TabTreatmentsRestorations,
    TabTreatmentsKids
  }
}
</script>
