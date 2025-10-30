
let task = []


document.getElementById('addbtn').addEventListener('click', ()=>{
    let value = document.getElementById('taskInput').value
    task.push(value)
    
    console.log(task)
})