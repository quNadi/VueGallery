<template>
<div>
  <my-header :cartItemCount="cartItemCount">
  </my-header>
  <div class="row">
    <div class="col-md-10 col-md-offset-1">
      <div class="panel panel-info">
        <div class="panel-heading">FORMULARZ</div>
        <div class="panel-body">
          <div class="form-group">
            <div class="col-md-12>">
              <h4>PODAJ INFORMACJE O SOBIE</h4>
            </div>
            <div class="form-group">
              <div class="col-md-6">
              <strong>Imię</strong>
              <input v-model.trim="order.firstname" class="form-control"/>
            </div>
              <div class="col-md-6">
              <strong>Nazwisko</strong>
              <input v-model.trim="order.lastname" class="form-control"/>
            </div>
            </div>
          <div class="form-group">
            <div class="col-md-12"><strong>Adres:</strong></div>
            <div class="col-md-12"><input v-model.trim="order.address" class="form-control"/></div>
          </div>

        <div class="form-group">
          <div class="col-md-12"><strong>Miasto:</strong>
          <div class="col-md-12"><input v-model.trim="order.city" class="form-control"/></div>
        </div>
      <div class="form-group">
        <div class="col-md-2"><strong>kod pocztowy:</strong>
        <input v-model.number="order.zip" class="form-control"/>
      </div>
      </div>
    <div class="form-group">
      <div class="col-md-6 cd-md-offset-4">
        <label for="gift">Wysłać jako prezent?</label>
     <input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendgift" v-bind:false-value="order.notsendgift" v-model="order.gift"/></div>
  </div>
  </div>
  <div class="form-group">
    <div class="col-md-6 boxes">
    <input type="radio" id="home" v-bind:value="order.home" v-model="order.method">
    <label for="home">Domowy</label>
    <input type="radio" id="business" v-bind:value="order.business" v-model="order.method"/>
    <label for="business">Firmowy</label>
  </div>
  </div>
  <div class="form-group">
    <div class="col-md-6"><button type="submit" class="btn btn-primary submit" v-on:click="submitform">Złóż zamówienie</button></div>
  </div>
</div>
  <div class="col-md-12 verify">
    <pre>
      Imię:     {{order.firstname}}
      Nazwisko: {{order.lastname}}
      Adres:    {{order.address}}
      Miasto:   {{order.city}}
      Kod:      {{order.zip}}
      Metoda:   {{order.method}}
      Prezent:  {{order.gift}}
    </pre>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
    import MyHeader from "./Header.vue";
    export default {
        name: "Form",
      props:['cartItemCount'],
      data() {
          return {
          order: {
            firstname:'',
              lastname:'',
              address:"",
              city: "",
              zip:"",
              method: 'Adres domowy',
              business: 'Adres firmowy',
              home: 'Adres domowy',
              gift: 'Wyśliej jako prezent',
              sendgift: 'wyslij jako prezent',
              notsendgift: 'Nie wysyłaj jako prezent',
          }
      }
    },
  components: { MyHeader },
      methods: {
        submitform(){
          alert('Wysłano')
        }}
    }
</script>

<style scoped>

</style>
