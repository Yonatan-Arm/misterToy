<template>
  <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
      />
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  data() {
    return {
      center: {lat: 32, lng: 34.75},
      markers: [
        {
          position: {
            lat: 32, lng: 34.75
          },
        }
        ,
      ]
    }
  }
}
</script>
<style >
.vue-map-container{
    height: 50vh;
    width: 40vw;
}

</style>