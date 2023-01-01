//select elements
let AddTask = document.getElementById('AddForm');
let Addinput = document.getElementById('addComponentInput');
let contebtboxList = document.getElementById('contebtbox'); 
let clearAll = document.getElementById('clearAll'); 

let navmenuall = document.getElementById('navmenu1'); 
let navmenuactive = document.getElementById('navmenu2'); 
let navmenucomplite = document.getElementById('navmenu3'); 

let TasksWrapper = JSON.parse(localStorage.getItem('tasks')) || [];

renderInHtml();

//form => Submit
AddTask.addEventListener('submit', function(event){
    event.preventDefault();
    saveTask();
    renderInHtml();
    localStorage.setItem('tasks', JSON.stringify(TasksWrapper));
});


//render in Html Tasks
function renderInHtml(){
    //CLEAR TASK BEFORE RENDER
    contebtboxList.innerHTML = ``;
    //RENDER
    TasksWrapper.forEach((task , index) => {
        if (task.Chacked) {
            contebtboxList.innerHTML += `
            <div class="task" id="${index}" data-action="check">
                <i class="bi ${task.Chacked ? 'bi-check-circle' : 'bi-circle' }"
                data-action="check"
                ></i>
                <p class="${task.Chacked ? 'ChackedValue' : '' }" data-action="check" >${task.value}</p>
            <i class="bi bi-trash" data-action="remove" ></i>
            </div>
            `
        }else{
        }
    })
}


//click for all elements
contebtboxList.addEventListener('click', (event) => {
    const target = event.target;
    const ParentElement = target.parentNode;

    if(ParentElement.className !== 'task') return;

//Task id
    const task = ParentElement;
    const taskId = Number(task.id);

//A C T I O N
    const actions = target.dataset.action;

    actions === "check" && checktask(taskId)
    actions === "remove" && removetask(taskId)

})

//CHECK FUNCTION
function checktask(taskId){
    TasksWrapper = TasksWrapper.map((task , index) =>({
            ...task ,
            Chacked: index === taskId ? !task.Chacked : task.Chacked,
        })
    )
    renderInHtml();
    localStorage.setItem('tasks', JSON.stringify(TasksWrapper));

}

// REMOVE TASK
function removetask(taskId){
    TasksWrapper = TasksWrapper.filter((task , index) => index , taskId);

    renderInHtml();
    localStorage.setItem('tasks', JSON.stringify(TasksWrapper));
}


//change pages
navmenuall.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('index.html');
})
navmenuactive.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('active.html');
})
navmenucomplite.addEventListener('click', (e) =>  {
    e.preventDefault();
    window.location.assign('complite.html');
})

//CLEAR LOCAL STORAGE
clearAll.addEventListener('click', event => {
    event.preventDefault();
    localStorage.clear();
    renderInHtml();
    window.location.assign('complite.html');
})