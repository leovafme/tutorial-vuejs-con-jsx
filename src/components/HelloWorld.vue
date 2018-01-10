<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Ejemplo/>
    <ListaDeFrutas/>
    <EventoClick/>
  </div>
</template>

<script>
import Ejemplo from './ejemplo'
import ListaDeFrutas from './lista'
import EventoClick from './evento'

export default {
  name: 'HelloWorld',
  components: { Ejemplo, ListaDeFrutas, EventoClick },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
