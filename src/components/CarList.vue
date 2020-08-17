<template>
  <div class="card">
    <div class="card-header">
      Voitures
    </div>
    <div class="card-body">
      <input v-model="search" type="text" placeholder="Recherche" class="form-control" />
      <hr />
      <ul class="list-group">
        <li v-for="car in carsSearch" :key="car" class="list-group-item"> <i class="fa fa-car"></i> {{ car }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
import  { carSearchMixin } from './carSearch.mixin.js'

export default {
    data() {
        return {
            search: '',
        }
    },
    mixins: [ carSearchMixin ],
    created() {
        console.log(' created in component')
    }
}
</script>

<style scoped>

</style>
