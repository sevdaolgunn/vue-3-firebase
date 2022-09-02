const app = Vue.createApp({
    data() {
        return {
            url: 'https://en.wikipedia.org/wiki/Wikipedia',
            showSeries: true,
            books:[
                { title:'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling', img:'assets/1.jpg'},
                { title:'Fantastic Beasts: The Secrets of Dumbledore', author: 'J. K. Rowling', img:'assets/2.jpg'},
                { title:'The Casual Vacancy', author: 'J. K. Rowling', img:'assets/3.jpeg'}
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