function addRecord() {
  const name = document.getElementById("name").value.trim();
  const type = document.getElementById("type").value.trim();

  if (name === "" || type === "") {
    alert("Please fill all fields!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = "🚨 " + name + " - " + type;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.style.marginLeft = "10px";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("records").appendChild(li);

  document.getElementById("name").value = "";
  document.getElementById("type").value = "";
}