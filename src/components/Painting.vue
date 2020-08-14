<template>
    <div>
      <my-header></my-header>
      <h1>Identyfikator: {{ $route.params.id }}</h1>
      <div class="row">
        <div class="col-md-5 col-md-offset-0">
          <figure>
            <img class="painting" v-bind:src="painting.image">
          </figure>
        </div>
        <div class="col-md-6 col-md-offset-0 description">
          <h1>{{ painting.title }}</h1>
          <p v-html="painting.description"></p>
          <p class="price">{{ painting.price }}</p>
        <button @click="edit" class="btn btn-primary">Edytuj produkt</button>
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    import MyHeader from "./Header.vue";
    export default {
        name: "Painting",
      components: {MyHeader},
      data(){
          return {
            painting:''
          }
      },
      methods:{
          edit(){
            this.$router.push({name:'Edit'})
          }
      },
      created() {
          axios.get('/static/paintings.json').then((response)=> {
            this.painting = response.data.apintings.filter(data=> data.id == this.$route.params.id)[0]
            this.painting.image= '/' + this.painting.image;
          });
      }
    }
</script>

<style scoped>

</style>
