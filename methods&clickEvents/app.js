const app= Vue.createApp({
    data() {
        return {
            title: 'Fatmagülün Suçu Ne?',
            director:'Hilal Saral ',
            age:30
            
        }
    },
    methods:{
        changeSerie(){
            this.title='Öyle bir geçer zaman ki',
            this.director='Zeynep Günay Tan',
            this.age='50'
        }
    }

})

app.mount('#app')