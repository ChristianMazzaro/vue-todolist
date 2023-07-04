

const { createApp } = Vue;

createApp({

    data(){


        return{   

            newTodo:'',

            toDos: [

                {
                    text: "rubare le pensioni alle anziane fuori dalle poste",
                    done:true
                },
                {
                    text: "fare di tutta l'erba un fascio;",
                    done:false
                },
                {
                    text: "mettere la cravatta alle uova in camicia",
                    done:false
                },
                {
                    text: "piangere sul latte versato",
                    done:false
                }
            ]
        }   
        
    },

    methods : {

        pushNewTodo(){

            if(this.newTodo != ''){
            this.toDos.push({
                text: this.newTodo,
                done: false
            });

            this.newTodo= '';
            }
        },

        removeDone(i){
            console.log('remove todo', i)
            this.toDos.splice(i, 1)
        },



    }

}).mount('#app');


