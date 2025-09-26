let $ = document
let inputElem = $.querySelector('#input')
let confirmBtn = $.querySelector('#check')
let todosContainer = $.querySelector('#todos-container')
let errorElem = $.querySelector('#error-message')




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
            <i class="delete-btn fa-solid fa-trash" style="color: #df4e4e;"></i>
            </li>`
    
    
        todosContainer.insertAdjacentHTML('beforeend' , todoStructor) 
        console.log('todo added')
        inputElem.value = ''
    }
    
}

todosContainer.addEventListener('click' , function(event){
    if (event.target.classList.contains('delete-btn')) {
        let todoItem = event.target.closest('li')
        todoItem.remove()
    }
})


// delete function
inputElem.addEventListener('input' , ()=> {
    if(inputElem.value.trim() !== '') {
        errorElem.textContent = ''
    }
})






confirmBtn.addEventListener('click' , addTodoIntoDOM)
inputElem.addEventListener('keydown' , addTodoIntoDOM)




