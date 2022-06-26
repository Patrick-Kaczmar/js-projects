// select all elements
const form = document.querySelector('#new-item-form');
const list = document.querySelector('#list');
const input = document.querySelector('#item-input');

// when i submit the form add a new element 
form.addEventListener('submit', e => {
  e.preventDefault();

  // create a new item
  const newItem = document.createElement('div')
  newItem.innerText = input.value
  // add that item to the list
  list.appendChild(newItem)
  newItem.className = 'list-item'
  // clear input
  input.value = ''
  // setup event listener to delete item when clicked
  newItem.addEventListener('click', () => {
    list.removeChild(newItem)
  })
})