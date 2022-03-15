<template>
<app-header></app-header>
<router-view></router-view>
</template>

<script>
import appHeader from './components/app-header.vue'
export default {
  name:'app',
  components: {
    appHeader,
  },
    created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
}
</script>



<style>

</style>
