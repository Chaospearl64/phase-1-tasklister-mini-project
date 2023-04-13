document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      addTaskToForm(e.target["new-task-description"].value);
    });
});


function addTaskToForm(newTask) {
  const newLi = document.createElement("li") 
  newLi.textContent = newTask;
  document.getElementById("tasks").append(newLi);
};






