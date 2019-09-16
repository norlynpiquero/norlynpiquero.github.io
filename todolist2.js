var todos = ["Study 1 Web Dev"];

var input = prompt("What would you want to do?");

while(input !== "quit"){
    if(input === "list") {
        listTodo();

    } else if(input === "new"){
        addTodo();

    } else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you want to do?");
}
console.log("OK, You quit the app!");

function listTodo(){
    console.log("**********")
        todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
        });
        console.log("**********")
}

function addTodo(){
    var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added Todo");
}

function deleteTodo(){
    var index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
        console.log("Deleted Todos");
}

