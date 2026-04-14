// Add a new emergency record
function addRecord() {
  const nameInput = document.getElementById('name');
  const typeInput = document.getElementById('type');

  const name = nameInput.value.trim();
  const type = typeInput.value.trim();

  // Validation
  if (name === "" || type === "") {
    alert("Please fill all fields!");
    return;
  }

  // Create list item
  const li = document.createElement('li');

  // Record text
  const text = document.createElement('span');
  text.textContent = "🚑 " + name + " - " + type;

  // Delete button
  const delBtn = document.createElement('button');
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "15px";
  delBtn.style.background = "#ff1e38";

  delBtn.onclick = function () {
    li.remove();
  };

  // Append elements
  li.appendChild(text);
  li.appendChild(delBtn);

  document.getElementById('records').appendChild(li);

  // Clear inputs
  nameInput.value = "";
  typeInput.value = "";
}

// Optional: press Enter to add record
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addRecord();
  }
});