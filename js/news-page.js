const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    let active = this.classList.toggle("active");
    let button = this.children[0];
    let panel = this.nextElementSibling;
    let svg = this.children[0].childNodes[3];

    if (panel.style.display === "block") {
      panel.style.display = "none";
      svg.classList.remove("rotate-180");
      button.style.borderBottomStyle = "solid";
    } else {
      panel.style.display = "block";
      svg.classList.add("rotate-180");
      button.style.borderBottomStyle = "none";
    }
  });
}

let container = document.getElementById("container");
let child = container.children;
let NumOfNews = child.length;
let NumOfScroll = Math.ceil(NumOfNews / 3);
let html = document.getElementById("html");
let fullhtml = [];
let circle = document.getElementsByClassName("circle");
let scrolll = 0
// function for slider right click
function right() {
  scrolll += 1293
  if(scrolll >= NumOfScroll * 1293){
    scrolll = (NumOfScroll-1) * 1293
  }
  container.scrollLeft = scrolll
  let page = Math.ceil(container.scrollLeft / 1293) + 1;
  if (page > circle.length - 1) {
    page = circle.length - 1;
  }
}

// function for slider selft click
function left() {
  scrolll -= 1293
  if(scrolll <= 0){
      scrolll = 0
  }
  container.scrollLeft = scrolll
  let page = Math.ceil(container.scrollLeft / 1293) - 1;
  if (page < 0) {
    page = 0;
  }

}

container.addEventListener("scroll", function(){
  for (let i = 0; i < document.getElementsByClassName("circle").length; i++) {
    document.getElementsByClassName("circle")[i].className =
      "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
  }
  let a = Math.round(container.scrollLeft / 1293)
  document.getElementsByClassName("circle")[a].className = "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer"
})
// start logic for slider dots
let buttons = document.getElementsByClassName("button");
let gg = [buttons];
const buttonPressed = (e) => {
  scrolll = e.target.id * 1293
  container.scrollLeft = scrolll
  let value = e.target.id * 1293;
};

for (let i = 0; i < NumOfScroll; i++) {
  let circle = document.createElement("div");
  circle.id = i;
  var element = document.getElementById("html");
  element.appendChild(circle);
  circle.className =
    "w-1.5 h-1.5 bg-[#E6E6E6] m-1.5  rounded-[50%] circle cursor-pointer";
}
circle[0].className =
  "w-1.5 h-1.5 bg-circle m-1.5  rounded-[50%] circle cursor-pointer";

for (let button of circle) {
  button.addEventListener("click", buttonPressed);
}
