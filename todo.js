var i = 0 ;
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = addForm.add.value.trim();

    if(todo.length != 0){
        generateTemplate(todo);
        addForm.reset();
    }else{
        alert('Please input task');
    }
});

const generateTemplate = (todo) => {
    const html = `<div  style="order:${i};display:flex;" id="${i}"class='list-group-item  justify-content-between align-items-center'>
        <div style="flex-grow:1;">${todo}</div>
        <div class="ctrl " >
        <button  class="delbtn" onclick="del(${i})">

        <i class="fa fa-trash-o "></i>
        </button>
        <div class="options"> 

        <button onclick="moveup(${i})"><i class="fa fa-angle-up" aria-hidden="true"></i></button>
        <button onclick="movedown(${i})"><i class="fa fa-angle-down" aria-hidden="true"></i></button>
        </div>
        </div>    
        </div>`;
    list.innerHTML += html;
    i++;
}

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})
function moveup(e){
console.log("up")
const parent=document.getElementById(e)
parent.style.order=parseInt(parent.style.order)-1;

}
function movedown(e){
console.log("down")
const parent=document.getElementById(e)
parent.style.order=parseInt(parent.style.order)+1;
}
function del(e){
    const parent=document.getElementById(e)
    parent.style.display='none ' 
    console.log(parent.style.display)
}
