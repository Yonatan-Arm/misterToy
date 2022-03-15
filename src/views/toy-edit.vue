<template>
    <section v-if="toyToEdit" class="toy-edit">

        <form @submit.prevent="save">
            <h2>{{title}}</h2>

            <input type="text" placeholder="name" v-model="toyToEdit.name" />
            <input type="number" placeholder="price" min="0" v-model="toyToEdit.price" />
           
            <!-- <label for="labels">Search a todo:</label> -->
                <input list="labels" @input="setFilter" v-model="toyToEdit.labels">
                <datalist id="labels"  >
                    <option value="On wheels"></option>
                    <option value="Box game"></option>
                    <option value="Art"></option>
                    <option value="Baby"></option>
                    <option value="Doll"></option>
                    <option value="Puzzle"></option>
                    <option value="Outdoor"></option>
                </datalist>
            <button>Save</button>
        </form>

        <router-link to="/toy/">Back</router-link>
    </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
    data() {
        return {
            toyToEdit: {
                name:'',
                price:0,
                labels:'',
            }
        }
    },
    computed:{
            toyId() {
            return this.$route.params.toyId
        },
            title() {
            console.log(this.toyId)
            return (this.toyId) ? 'Toy Edit' : 'Toy Add'
        },
    },
    methods: {
        save() {
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then((savedTodo) => {
        //   showSuccessMsg(`save todo ${savedTodo._id}`);
        })
        .catch(() => {
        //   showErrorMsg(` cannot save todo`);
        });
      this.toyToEdit = toyService.getEmptyToy()
        this.$router.push('/toy');
    },
      
    },
    created() {
            console.log('this.$route.params.toyId', this.$route.params.toyId);
        if (this.$route.params.toyId) {
            toyService.getById(this.$route.params.toyId)
                .then(toy => this.toyToEdit = toy)
        } else {
            this.toyToEdit = toyService.getEmptyToy()
        }
    }
}
</script>

<style>

</style>