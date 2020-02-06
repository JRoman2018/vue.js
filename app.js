const app = new Vue({
    el: "#app",
    data: {
        title: "Titulo en Vue",
        contador: 0
    },
    computed: {
        invertido() {
            return this.title.split('').reverse().join('');
        },
        color() {
            return {
                'bg-danger': this.contador <= 25,
                'bg-warning': this.contador > 25 && this.contador < 60,
                'bg-success': this.contador >= 60
            }
        }
    }
})