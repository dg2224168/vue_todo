var app = new Vue({
    el :'#app',
    data: {
        message: "Hello World!",
        newToDo: "",
        todos: []
        
    },
    methods: {
        addToDo() {
            // console.log("Form Submitted.");
            // console.log(this.newToDo)
            this.todos.push({
                title: this.newToDo,
                done: false
            });
            this.newToDo = "";
        },
        removeToDo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            })
        }

    }

})