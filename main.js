const vue = new Vue(
    {
        el: '#app',
        data: {
            newTodo: '',
            todos:[
                {
                    text: 'fare la spesa',
                    done: false,
                },
                {
                    text: 'studiare',
                    done: true,
                },
                {
                    text: 'preparare la cena',
                    done: true,
                }
            ],
        },
        methods: {
            addTodo() {
                if (this.newTodo.trim().length > 0) {

                    const newTodoObj = {
                        text: this.newTodo.trim(),
                        done: false
                    }
                    this.todos.push(newTodoObj);
                }
                this.newTodo='';
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            changeStatus(index) {
                this.todos[index].done = !this.todos[index].done;
            }
        }
    }
)