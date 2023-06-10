const app = {
    data() {
        return {
            todoTitle: 'Notick',
            todoPlaceholder: 'Enter the note',
            todoLabel: 'Enter note:',
            todoValue: '',
            upperCaseValue: '',
            btnAdd: '<i class="bi bi-plus-lg"></i>',
            btnRemove: '<i class="bi bi-trash3"></i>',
            btnDone: '<i class="bi bi-check-lg"></i>',
            todoList: [],
            todoCount: 0,
            isBold: false,
            isUpperCase: false,
            isSelect: false,
        }
    },
    mounted() {
        this.$refs.todoInput.focus()
    },
    methods: {
        todoAdd() {
            console.log('add')
            if (this.todoValue !== '') {
                this.todoList.push({ note: this.todoValue, properties: { isBold: this.isBold, isUpperCase: this.isUpperCase, isSelect: this.isSelect, isDone: false } })
                this.todoValue = ''
            }
            if (this.todoValue === '') this.$refs.todoInput.focus()
        },
        todoRemove(index) {
            console.log('remove')
            this.todoList.splice(index, 1)
        },
        todoDone(item) {
            console.log('done')
            item.properties.isDone = !item.properties.isDone
        },
        todoSelect(item) {
            console.log('select')
            item.properties.isSelect = !item.properties.isSelect
        },
        todoTextClass(item) {
            return {
                'fw-bold': item.properties.isBold,
                'text-uppercase': item.properties.isUpperCase,
                'text-success text-decoration-line-through': item.properties.isDone,
            }
        },
        todoItemClass(item) {
            return {
                'bg-success-subtle': item.properties.isDone,
                'bg-secondary-subtle': item.properties.isSelect,
            }
        }
    },
    computed: {
        todoListCount() {
            console.log("count")
            return this.todoList.length
        },
    }
}

Vue.createApp(app).mount('#app')