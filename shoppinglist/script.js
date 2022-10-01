var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function checkList() {
  return document.getElementsByTagName("li").length;
}

function createListElement() {
  var li = document.createElement("li");
  var doneBTN = document.createElement("button");
  var delBTN = document.createElement("button");

  // Button Styles
  delBTN.classList.add("danger");
  doneBTN.classList.add("doneButton");

  li.appendChild(document.createTextNode(input.value));
  li.appendChild(delBTN);
  li.appendChild(doneBTN);
  ul.appendChild(li);

  doneBTN.innerHTML = "Done";
  delBTN.innerHTML = "Delete";

  delBTN.addEventListener("click", deleteElement);
  li.addEventListener("click", doneElement);
  input.value = "";

  if (checkList() > 0) {
    var emptyList = document.querySelector("h2");
    emptyList.style.display = "none";
  }

  //Delete Element onCLick
  function deleteElement() {
    li.remove();
    if (checkList() == 0) {
      var emptyList = document.querySelector("h2");
      emptyList.style.display = "block";
    }
  }

  // Toggle Done
  function doneElement() {
    li.classList.toggle("done");
  }
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
