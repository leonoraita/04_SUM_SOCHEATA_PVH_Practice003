let tasks = [];

function addTask() { 
    const taskName = document.getElementById("taskName").value.trim();
    const dueDate = document.getElementById("taskDate").value;
    const priority = document.getElementById("taskPriority").value;
    
    const taskNameRegex = /^[a-zA-Z0-9\s.,'-]{3,}$/;
    const today = new Date().toISOString().split("T")[0];
    
    if (!taskName || !dueDate || !priority) {
        alert("Please fill all fields.");
        return;
    }
    
    if (!taskNameRegex.test(taskName)) {
        alert("Task Name must be at least 3 characters long and contain only letters, numbers, spaces, and basic punctuation.");
        return;
    }
    
    if (dueDate < today) {
        alert("Due Date cannot be in the past. Please select today or a future date.");
        return;
    }

    // Store task in array
    const newTask = {
        name: taskName,
        dueDate: dueDate,
        priority: priority,
        status: "Pending"
    };
    tasks.push(newTask);

    // Append only the new task to the table (no clearing old rows)
    appendTaskToTable(newTask, tasks.length - 1);

    // Clear input fields
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskPriority").value = "";
}

function appendTaskToTable(task, index) {
    const tableBody = document.getElementById("taskTableBody");
    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${task.name}</td>
        <td>${task.dueDate}</td>
        <td class="${task.priority.toLowerCase()}">${task.priority}</td>
        <td><span class="pending status" onclick="toggleStatus(this, ${index})">${task.status}</span></td>
    `;
}

function toggleStatus(element, index) {
    if (tasks[index].status === "Pending") {
        tasks[index].status = "Completed";
        element.classList.remove("pending");
        element.classList.add("completed");
        element.textContent = "Completed";
    
    }

}