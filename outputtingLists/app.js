const app = Vue.createApp({
    data() {
        return {
            showSeries: true,
            books:[
                { title:'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling'},
                { title:'Fantastic Beasts: The Secrets of Dumbledore', author: 'J. K. Rowling'},
                { title:'The Casual Vacancy', author: 'J. K. Rowling'}
            ] 
        }
    },
    methods:{
        toogleShowSeries(){
            this.showSeries = !this.showSeries

        },
       
    }

})

app.mount('#app')
