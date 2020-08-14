<template>
    <div>
      <my-header :cartItemCount="cartItemCount"></my-header>  <!-- COMP -->
      <main>
        <div v-for="painting in sortedpaintings">
          <div class="row">
            <div class="col-md-5 col-md-offset-0">
              <figure>
                <img class="painting" v-bind:src="painting.image">
              </figure>
            </div>
            <div class="col-md-6 col-md-offset-0 description">
              <router-link
                tag="h1"
                :to="{name:'Id', params: {id:painting.id}}">
                {{painting.title}}
              </router-link>
              <p v-html="painting.description"></p>
              <p class="price">
                {{painting.price}}
              </p>
              <button class="btn btn-primary btn-lg" v-on:click="addToCart(painting)"
                      v-if="canAddToCart(painting)">Dodaj do koszyka</button>
              <button class="btn btn-primary btn-lg" v-else>Dodaj do koszyka</button>

              <span class="inventory-info" v-if="painting.availableInventory-cartCount(painting.id)===0"> Brak obrazu</span>
              <span class="inventory-info" v-else-if="painting.availableInventory-cartCount(painting.id)<6">Zostały tylko {{painting.availableInventory-cartCount(painting.id)}}</span>
              <span class="inventory-info" v-else>Kupuj teraz</span>
              <div class="rating">
                <span v-bind:class="{'rating-active': checkRating(n,painting)}" v-for="n in 5">*</span>
              </div>
            </div>
            </div>
          </div>
      </main>
    </div>
</template>

<script>
  import MyHeader from './Header.vue';
  import {mapGetters} from 'vuex';
    export default {
      name: "imain",
      data() {
        return {
          cart: []
        };
      },
      components: {MyHeader},
      methods: {
        checkRating(n, painting) {
          return painting.rating - n >= 0;
        },
        addToCart(apainting) {
          this.cart.push(apainting.id);
        },
        canAddToCart(apainting) {
          return apainting.availableInventory > this.cartCount(apainting.id);
        },
        cartCount(id) {
          let count = 0;
          for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i] === id) {
              count++;
            }
          }
          return count;
        }
      },
      computed: {
        ...mapGetters([
          'paintings'
        ]),

        cartItemCount() {
          return this.cart.length || '';
        },
        sortedpaintings() {
          if (this.paintings.length > 0) {
            let paintingArray = this.paintings.slice(0);

            function compare(a, b) {
              if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1;
              if (a.title.toLowerCase() > b.title.toLowerCase())
                return 1;
              return 0;
            }

            return paintingArray.sort(compare);
          }
        }
      },
      created: function () {
        this.$store.dispatch('initStore');


      }
    }
</script>

<style scoped>

</style>
