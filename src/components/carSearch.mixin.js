export const carSearchMixin = {
    data() {
        return {
            search: '',
            cars: ['tesla', 'renault', 'audi', 'bmw'],
        }
    },
    computed: {
        carsSearch() {
            return this.cars.filter((c) => c.startsWith(this.search));
        }
    },
    created() {
        console.log(' created in mixin')
    }
}