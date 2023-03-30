const {createApp} = Vue;

createApp ({
    data () {
        return {
            newTodos: "",
            todos: [
                {
                    text: "Fare la spesa",
                    done: false
                },
                {
                    text: "Fare il bucato",
                    done: true
                },
                {
                    text: "Fare da mangiare",
                    done: true
                },
                {
                    text: "Andare ad allenarsi",
                    done: false
                }
            ]
        }
    },
    methods: {
        newElem() {
            this.todos.push({
                text: "",
                done: false
            });
            this.newTodos = "";
        }
    }
}).mount('#app')