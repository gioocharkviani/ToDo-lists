//select elements
let AddTask = document.getElementById('AddForm');
let Addinput = document.getElementById('addComponentInput');
let contebtboxList = document.getElementById('contebtbox'); 
let activecontent = document.getElementById('activecontent'); 

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

//save Tasks 
function saveTask() {
    const taskvalue = Addinput.value

    //if input is empty 
const isempty = taskvalue === '';

//if task is duplicate in arrey
const duplicate = 
TasksWrapper.some((task) => task.value.toUpperCase() === taskvalue.toUpperCase());

if(isempty){
    alert('Task input is empty');
}else if(duplicate){
    alert('A similar task already exists')
}
else{
    TasksWrapper.push({
        value:taskvalue,
        Chacked: false , 
    });
    Addinput.value = '';
}
}

//render in Html Tasks
function renderInHtml(){
    //CLEAR TASK BEFORE RENDER
    contebtboxList.innerHTML = ``;
    //RENDER
    TasksWrapper.forEach((task , index) => {
        if (task.Chacked) {
            return;
        }else{
            contebtboxList.innerHTML += `
            <div class="task" id="${index}" data-action="check">
                <i class="bi ${task.Chacked ? 'bi-check-circle' : 'bi-circle' }"
                data-action="check"
                ></i>
                <p class="${task.Chacked ? 'ChackedValue' : '' }" data-action="check" >${task.value}</p>
            <i class="bi bi-trash" data-action="remove" ></i>
            </div>
            `
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