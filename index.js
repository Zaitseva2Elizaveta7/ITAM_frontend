const list = document.querySelector(".toDo-List");
function handleClick(event){    
    const input = document.getElementById("toDoInput");
    const toDoText = input.value;
    const item = document.createElement("li");
    item.innerText=toDoText;
    list.appendChild(item);
    input.value="";
    
}
const button = document.getElementById("toDoButton");
button.addEventListener('click', handleClick);


document.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Кликнут li:', event.target.textContent);
        
        event.target.classList.toggle('active');
    }
});

const ul_list = document.querySelector(".toDo-List");

ul_list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});