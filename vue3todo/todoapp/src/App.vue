<template>
  <h1>Welcome to Todo App</h1>

  <form @submit.prevent="addNewTodo">
  <label for="todo">Add New Todo Item:</label>
  <input v-model="newTodo" type="text">
  <button>Add New ToDo</button>
  </form>
 <ul>
  <li v-for="(todo, index) in todos" v-bind:key="todo.id" class="todo">
  <h3 @click="toggleDone(todo)" v-bind:class="{doneclass: todo.done}">{{todo.content}}</h3>

  <button @click="removeTodo(index)">Remove Todo</button>
  </li></ul>

  <button @click="markAllDone">Mark All Done!</button>
  <button @click="removeAllDone">Remove all!</button>

  {{newTodo}}
</template>

<script>

import {ref} from 'vue';
export default {
  setup() {
    const newTodo = ref('');
    const todos = ref([]);
    function addNewTodo() {

      todos.value.push({
        id: Date.now(),
        done:false,
        content: newTodo.value,
      });
      newTodo.value = "";
      // console.log("Form Submitted!");
      // console.log(newTodo.value)
    }

     function toggleDone(todo){
      todo.done = !todo.done;
    }

    function removeTodo(index) {
      todos.value.splice(index, 1);
    }

    function markAllDone() {
      todos.value.forEach((todo) => todo.done = true);
    }

    function removeAllDone(){
      todos.value = []
    }
    return {
      newTodo,
      addNewTodo,
      todos,
      toggleDone,
      removeTodo,
      markAllDone,
      removeAllDone
    };

   
  }
  
}
</script>

  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo {

  cursor: pointer;

}

label{
  display: block;
  
}

.doneclass {
  text-decoration: line-through;
}

</style>
