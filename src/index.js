document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
   e.preventDefault()
   myToDos(e.target.new_task_description.value);
  })

   
});
function myToDos(todo){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  list.textContent = `${todo}`
  list.appendChild(btn)
  console.log(list)
  document.querySelector('#tasks').appendChild(list)

}

function handleDelete(e){
  e.target.parentNode.remove()
}
