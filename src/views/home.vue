<template>
    <h1>Welcome To Mister Toy</h1>
    <section>
        <chart />
        <map-locatin> </map-locatin>

    </section>
</template>

<script>
     import chart from '../components/chart.vue'
     import mapLocatin from '../components/map-locations.vue'
export default {
    name:'home',
    components:{
        chart, 
        mapLocatin
    },
}
</script>

<style>

</style>