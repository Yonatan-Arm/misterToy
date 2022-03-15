<template>
  <section v-if="toy">
    <article>
      <p><span >Id:</span> {{ toy._id }}</p>
      <p><span >Name:</span> {{ toy.name }}</p>
      <p><span >Price:</span> {{ toy.price }}</p>
      <p><span >Instock:</span> {{ toy.inStock }}</p>
      <p><span >Created:</span> {{ formattedDate}}</p>
      <p><span >Type:</span> {{ toy.labels }}</p>
    </article>
    <button @click="goBack" >go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-details',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const id = this.$route.params.toyId
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
  computed:{
    formattedDate(){
        return new Date(this.toy.createdAt).toDateString();
    }
  
  }
}
</script>
