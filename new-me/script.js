let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];

(function () {
  setModeEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setBioEventListener();

  // setInterval(() => {
  //   setRandomPhoto();
  // }, 2500);

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

/* Dark Mode */
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   let list = document.body.classList;
//   list.add("dark-mode")
//   console.log('dark mode');
// }
// else {
//   let list = document.body.classList;
//   list.remove("dark-mode")
//   console.log('light mode');
// }

function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", event => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
  });
}

/* Colors */
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach(e => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach(e => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */
function setRandomPhoto() {
  let num = Math.floor(Math.random() * 2) + 1;
  console.log(num);
  document.getElementById("propic").src = `./img/pp${num}.jpg`;
}

/* Bio Toggles */
function setBioEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach(e => {
    e.addEventListener("click", bioToggle);
  });
}

function bioToggle(e) {
  let bioType = e.target;
  let color = getRandomColor();
  off(bioType);
  bioType.style.cssText = `border-color: ${color};
    color: ${color};
    font-weight: bold;`;
  let bioTypeElement = document.getElementsByClassName(bioType.id)[0];
  if (bioTypeElement !== undefined) bioTypeElement.classList.add("show");
}

function off(bioType) {
  Array.from(document.getElementsByTagName("button")).forEach(butt => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("bio")).forEach(e => {
    e.classList.remove("show");
  });
}
