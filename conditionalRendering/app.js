const app= Vue.createApp({
    data() {
        return {
            showSeries: true,
            title: 'Fatmagülün Suçu Ne?',
            director:'Hilal Saral ',
            age:30
            
        }
    },
    methods:{
        toogleShowSeries(){
            this.showSeries = !this.showSeries

        }
    
    }

})

app.mount('#app')