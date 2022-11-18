const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

function createTodo (removefam) {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const button = document.createElement('button')
        const changeButton = document.createElement('button')
        
        div.setAttribute('class', 'block_text')
        button.setAttribute('class', 'delete')
        changeButton.setAttribute('class', 'Edit')

        text.innerText = input.value
        button.innerText = ('Delete')
        removeTask(button)
        changeButton.textContent = "Edit";
        changeTask(changeButton, text);
        

        todoList.append(div)
        div.append(text)
        div.append(button)
        div.append(changeButton)
        
    }
    input.value = ''
}
removeTask = (button) => {
    button.addEventListener("click", (e) => {
        todoList.removeChild(e.target.parentElement)
    })
}
changeTask = (button, textElement) => {
    button.addEventListener("click", () => {
        textElement.textContent = prompt();
    })
}
createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)