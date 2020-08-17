<template>
  <div class="card">
    <div class="card-header">
      Event
    </div>
    <div class="card-body">
      <div>  Name : {{ event.name | capitalize }} </div>
      <div>  Price : {{ event.price | euro }} </div>
      <div>  Date : {{ event.date | date }} </div>
      <div>  Synopsis : {{ event.synopsie | maxLength(40) | capitalize }} </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.filter('date', (date) => {
  return ` ${ date.getDate() } / ${ ('0' + (date.getMonth()+1)).slice(-2) } / ${ date.getFullYear()  } `
})


Vue.filter('maxLength', (value, length) => {
  if(value.length > length) {
    return value.slice(0, length - 4) + ' ...';
  } else {
    return value;
  }
})


export default {
  data() {
    return {
      event: {
        name: 'fight club',
        price: 10,
        date: new Date(),
        synopsie: 'as a good convention, you should lowercase the first character in your variable names and reserve camel casing for objects/prototypes'
      }
    }
  },
  filters: {
    capitalize(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    euro(value) {
      return value + ' €';
    }
  }
}
</script>

<style scoped>

</style>
