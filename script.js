let $ = document
let inputElem = $.querySelector('#input')
let confirmBtn = $.querySelector('#check')
let todosContainer = $.querySelector('#todos-container')
let errorElem = $.querySelector('#error-message')
let deleteBtn = $.querySelector('#delete-btn')



function addTodoIntoDOM (event) {
    let inputValue = inputElem.value.trim()
    if((event.key === 'Enter' || event.type === 'click')) {

        if(inputValue === '') {
            errorElem.textContent = "❌ Please enter a todo!"
            return
        }
        errorElem.textContent = ''
        let todoStructor = `
        <li class="todo">
                    <label class="todo-label">
                    <input type="checkbox" name="checkbox" id="todo-chechbox" class="checkbox">
                    <span class="todo-text">${inputValue}</span>
                </label>
                </li>`
    
    
        todosContainer.insertAdjacentHTML('beforeend' , todoStructor) 
        console.log('todo added')
        inputElem.value = ''
    }
}


// delete function

inputElem.addEventListener('input' , ()=> {
    if(inputElem.value.trim() !== '') {
        errorElem.textContent = ''
    }
})






confirmBtn.addEventListener('click' , addTodoIntoDOM)
inputElem.addEventListener('keydown' , addTodoIntoDOM)
deleteBtn.addEventListener('click' , deleTodoHandler)



