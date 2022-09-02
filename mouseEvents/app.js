const app= Vue.createApp({
    data() {
        return {
            showSeries: true,
            title: 'Fatmagülün Suçu Ne?',
            director:'Hilal Saral ',
            age:30,
            x : 0,
            y: 0


            
        }
    },
    methods:{
        toogleShowSeries(){
            this.showSeries = !this.showSeries

        },
        handleEvent(){
            console.log('event')

        },
        handleMousemove(e){
            this.x = e.offsetX,
            this.y = e.offsetY

        }
    
    }

})

app.mount('#app')