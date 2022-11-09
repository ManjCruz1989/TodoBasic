window.addEventListener("load", ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
     
    form.addEventListener("submit", (e)=>{
     e.preventDefault();
     
     const task = input.value; 

    if(!task){
        alert("Please fill in the input box");
        return;
    }
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        
        const task_content_in = document.createElement("input");
        task_content_in.classList.add("text");

        task_content_in.setAttribute('value', task);

        task_content_in.readOnly = "true";

        const task_actions = document.createElement("div");
        task_actions.classList.add("actions");

        const task_actions_btne = document.createElement("button");
        task_actions_btne.classList.add("edit");

        task_actions_btne.textContent = "Edit";

        const task_actions_btnd = document.createElement("button");
        task_actions_btnd.classList.add("delete");

        task_actions_btnd.textContent = "Delete";
    
        task_content_el.appendChild(task_content_in);
        task_el.appendChild(task_content_el);
        
        task_actions.appendChild(task_actions_btne);
        task_actions.appendChild(task_actions_btnd);
        
        task_el.appendChild(task_actions);
        list_el.appendChild(task_el);

        input.value = "";

        task_actions_btne.addEventListener('click', ()=>{
            if(task_actions_btne.innerText.toLowerCase() == "edit")
            {task_content_in.removeAttribute('readonly');
            task_content_in.focus();
            task_actions_btne.textContent = "Save";
        }else{
            task_content_in.readOnly = "true";
            task_actions_btne.textContent = "Edit";
        }
            
        });

        task_actions_btnd.addEventListener('click', ()=>{
            task_content_in.focus();
            task_el.remove();
        })

    });
     
    

})