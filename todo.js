const inputBox = document.getElementById("input-box");  //fetching the input box to a variable 
const listContainer = document.getElementById("list-container");
function AddTask(){  //this is the function which we added in the button we have mentioned the working of that button here
    if(inputBox.value===''){ //if the input box is empty and we click on button this will throw an alert message
        alert("Can't be Empty! Add Some Task ")
    }
 
    else{ //in this scenario this will create a brand new list whose css is mentioned in style folder
        let li = document.createElement("li"); //creating a new list item
        li.innerHTML = inputBox.value;  //fetchhing the html of input box which we already stored in a variable 
        listContainer.appendChild(li);  // simply like ul this will create that new list item
        let span = document.createElement("span");  //this is for the cross symbol infront of every list item
        span.innerHTML = "\u00d7";
        li.appendChild(span);   
    }
    inputBox.value = "";   //after adding up every item this will clear the input box
    saveData();   //help not to erase the data from browser even on refresh or if we come back after sometime
}
listContainer.addEventListener('click', function(e){  //this eventlistener is used for check box 
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){   //in this span where we have placed a cross symbol will erase  the task if we will click on this 
        e.target.parentElement.remove();
        saveData();
    }
},false)
function saveData(){  //this is the function which keeps the track of our entries even when we are offline
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){ //and this show us the task when we comeback
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();