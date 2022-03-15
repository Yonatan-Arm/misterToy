<template>
     <li class="toy-preview">
        <p><span class="fw-bold">name:</span> {{ toy.name }}</p>
        <p><span class="fw-bold">price:</span> {{ toy.price }}</p>

        <div class="btn-group">
          <button @click="goToEdit" class="btn btn-primary">edit</button>
          <button @click="goToDetail" class="btn btn-info">details</button>
          <button @click="removeToy(toy._id)" class="btn btn-danger">delete</button>
        </div>
  </li>
  
</template>

<script>
export default {
name:'toy-preview',
props:{
    toy:{
        type:Object,
        
    }
},
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
    },
  },
}
</script>

<style>

</style>