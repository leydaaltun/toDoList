let toDos = [

]



if(localStorage.getItem('savedToDos')) {
    const savedToDos = localStorage.getItem('savedToDos')
    const parsed = JSON.parse(savedToDos)
    console.log(parsed)
    toDos = parsed
}


function getToDo(toDo,index) {
    console.log(index,toDo)
    const text = toDo.text
    const isDone = toDo.isDone

    let className = ''

    if(isDone === true) {
        className = 'done'
    } 
    

    return (`
    <div class='todo ${className}' data-index='${index}'>
        ${text}
    </div>`)

}

//console.log(getToDo(toDos[1]))

const parent = document.querySelector('.todo-list')
//parent.innerHTML = getToDo(toDos[1])

const toDoCount = document.querySelector('.todoCount')
//console.log(toDoCount)

function updateHTML() {
    let html = ''

    toDos.forEach((item,index) => {
        const toDo = getToDo(item,index)
        html += toDo
    })

    console.log(html)
    parent.innerHTML = html

    const newToDo = toDos.filter(function(toDo){
        if(toDo.isDone === false) {
            return true
        } else {
            return false
        }

        
    })
    console.log(newToDo) 
    toDoCount.innerHTML = newToDo.length

    
}



updateHTML()

const toDoElems = [...document.querySelectorAll('.todo')]
//console.log(toDoElems)

// toDoElems.forEach(toDo => {
//     //console.log(toDo)
//     toDo.addEventListener('click',handleClick)
// }) 

parent.addEventListener('click',checkIfToDo)

function checkIfToDo(event) {
    //console.log(event.target.classList)

    if(event.target.classList.contains('todo')) {
        handleClick(event.target)
    }

}

function handleClick(element) {
    const index = element.dataset.index
    //console.log(index)
    let isDone = toDos[index].isDone

    if(isDone) {   // this means === true
        toDos[index].isDone = false
        //console.log(true)
    } else {
        toDos[index].isDone = true
        //console.log(false)
    }
    console.log(toDos)
    
    const json = JSON.stringify(toDos)
    localStorage.setItem('savedToDos',json)

    updateHTML()
}

const form = document.querySelector('form')
//console.log(form)
form.addEventListener('submit',handleSubmit)

const input = document.querySelector('input')
//console.log(input)

function handleSubmit(event) {
    event.preventDefault()
    console.log(input.value)
    if(input.value !== '') {    
        const object = 
        {
            text: input.value ,
            isDone: false,
        }
    toDos.push(object)
    console.log(toDos)

    const json = JSON.stringify(toDos)
    localStorage.setItem('savedToDos',json)

    updateHTML()

    input.value = ''
}

    
}

