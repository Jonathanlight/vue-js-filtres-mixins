import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.mixin({
    created() {
        console.log('created in global')
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')