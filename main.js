let plusIcon = document.getElementById("plus");
let spans = document.querySelector(".spans");
let notesCotainer = document.querySelector(".notes-conatiner");
let spanbtn = document.querySelectorAll(".spans span");
let notes = document.querySelectorAll(".input-box");

function shownotes() {
  notesCotainer.innerHTML = localStorage.getItem("note");
}
shownotes();

function updateStorge() {
  localStorage.setItem("note", notesCotainer.innerHTML);
}

plusIcon.onclick = function () {
  spans.classList.toggle("hide");
};

spanbtn.forEach((span) => {
  span.addEventListener("click", (eo) => {
    let inputBox = document.createElement("div");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.style.backgroundColor = eo.target.style.backgroundColor;
    img.src = "image/close.png";
    notesCotainer.appendChild(inputBox).appendChild(img);
  });
});

notesCotainer.addEventListener("click", (eo) => {
  if (eo.target.tagName === "IMG") {
    eo.target.parentElement.remove();
    updateStorge();
  }
  if ((eo.target.tagName = "P")) {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorge();
      };
    });
  }
});
