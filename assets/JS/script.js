var input_task = $("#task");
const totalTaskSpan = $("#total_task");

var ul;
var li;
var tasksArr = [];
var inputValue = "";
var totalTask = 0;


createInitialScreen();


function getLocalStorageData() {
    if (localStorage.length) {
        tasksArr = (localStorage.getItem(localStorage.key("task"))).split(",");  
    }
}


function createInitialScreen() {
    getLocalStorageData()
    ul = $("<ul>")
    $("body").append(ul);
    totalTask = tasksArr.length;
    tasksArr.forEach(taskList);
    totalTaskSpan.text(totalTask)
    
}
function taskList(item)
{
    var button = $("<button>").text("Complete");
    button.attr("id", `button_${totalTask}`)

    li = $("<li>").text(item);
    li.append(button)
    ul.append(li);
}


input_task.keypress((event) => {

    if (event.keyCode == 13) {
        inputValue = input_task.val();

        if (inputValue.length > 0) {
            tasksArr.unshift(inputValue);
            taskList(inputValue)
            localStorage.setItem("task", tasksArr);           
            totalTask++;
        }
        inputValue = input_task.val("");
        totalTaskSpan.text(totalTask)
    }
});

ul.click((event)=>{
    
    console.log(this.id)
})