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

    displayTask(taskName, dueDate, priority);
    
    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskPriority").value = "";
}

function displayTask(taskName, dueDate, priority) {
    const tableBody = document.getElementById("taskTableBody");

    const row = tableBody.insertRow();
    row.innerHTML = `
        <td>${taskName}</td>
        <td>${dueDate}</td>
        <td class="${priority.toLowerCase()}">${priority}</td>
        <td><span class="pending">Pending</span></td>
    `;
}
