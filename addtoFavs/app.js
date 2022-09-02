const app = Vue.createApp({
    data() {
        return {
            url: 'https://en.wikipedia.org/wiki/Wikipedia',
            showSeries: true,
            books:[
                { title:'Harry Potter and the Chamber of Secrets', author: 'J. K. Rowling', img:'assets/1.jpg', isFav: true},
                { title:'Fantastic Beasts: The Secrets of Dumbledore', author: 'J. K. Rowling', img:'assets/2.jpg', isFav: false},
                { title:'The Casual Vacancy', author: 'J. K. Rowling', img:'assets/3.jpeg', isFav: true}
            ] 
        }
    },
    methods:{
        toogleShowSeries(){
            this.showSeries = !this.showSeries

        },

        addtoFav(book){
            book.isFav = !book.isFav 
        }
       
    }

})

app.mount('#app')

//CHALLENGE-- Add to Favs

//   --attach a click event to each li tag (for-each book)

//   --when a user clicks an li, toogle the 'isFav' property of the book