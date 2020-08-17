<template>
  <div id="app" class="container text-left">
    <h1 class="text-left"> Filter et Mixins : </h1> <hr />
    <FilterExemple></FilterExemple>

    <CarList></CarList>
  </div>
</template>

<script>
import FilterExemple from './components/FilterExemple'
import CarList from './components/CarList'
import  { carSearchMixin } from './components/carSearch.mixin.js'

export default {
  name: 'App',
  components: {
    FilterExemple,
    CarList
  },
  mixins: [ carSearchMixin ],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
