for (
  let i = 0;
  i <=
  document.getElementsByTagName("aside")[0].getElementsByTagName("li").length -
    1;
  i++
) {
  document
    .getElementsByTagName("aside")[0]
    .getElementsByTagName("li")
    [i].addEventListener("click", function () {
      DoesItCurrent(this.id);
    });
}

let asideWidth = document.querySelector("aside").offsetWidth;
document.querySelector("body").style.marginRight = asideWidth + "px";

document.querySelector("#lang-panel").style.width = asideWidth + "px";

var active = false;

const optionsButton = document.querySelector("#lang-switcher");

var settingsMobile = false;

document.querySelector("#settings-mobile").onclick = function (event) {

  optionsButton.onclick();
  document.querySelector("#lang-panel").style.opacity = "100%";


  if (settingsMobile) {
    document.querySelector("aside").style.display = "flex";
    document.querySelector("#settings-mobile").classList.add("active");
  } else {
    document.querySelector("aside").style.display = "none";
    document.querySelector("#settings-mobile").classList.remove("active");
  }
};

optionsButton.onclick = function (event) {
  // вывести тип события, элемент и координаты клика
  active = !active;
  settingsMobile = !settingsMobile

  if (active) {
    document.querySelector("#lang-panel").style.opacity = "100%";
    optionsButton.classList.add("options-active");

    document.querySelector("aside").querySelector("ul").style.filter =
      "blur(8px)";
    document.querySelector("aside").querySelector("ul").style.pointerEvents =
      "none";
    try {
      document.querySelector("aside").querySelector("ul").style.color = "gray";
    } catch {}
    try {
      document
        .querySelector("aside")
        .querySelector("a")
        .querySelector("button").style.filter = "blur(10px)";
    } catch {}
    document.querySelector("#lang-panel").style.zIndex = "10";
  } else {
    document.querySelector("aside").querySelector("ul").style.pointerEvents =
      "auto";

    try {
      document.querySelector("#lang-panel").style.opacity = "0%";
      document.querySelector("aside").querySelector("ul").style.color =
        "var(--text-color)";

      optionsButton.classList.remove("options-active");

      document.querySelector("#lang-panel").style.zIndex = "-10";
      document.querySelector("aside").querySelector("ul").style.filter = "none";
      document
        .querySelector("aside")
        .querySelector("a")
        .querySelector("button").style.filter = "none";
    } catch {}
  }
};

window.addEventListener(
  "resize",
  function (event) {
    let asideWidth = document.querySelector("aside").offsetWidth;

    if (parseInt(document.querySelector("html").clientWidth, 10) > 980) {
        
    document.querySelector("body").style.marginRight = asideWidth + "px";
    document.querySelector("#lang-panel").style.width = asideWidth + "px";


        active = true

      document.querySelector("aside").style.display = "flex";

if(!settingsMobile){
active = false
      document.querySelector("#lang-panel").style.opacity = "0%";}

    } else {

        
    document.querySelector("body").style.marginRight = 0
    document.querySelector("#lang-panel").style.width = 0
        settingsMobile = true

        document.querySelector("#lang-panel").style.opacity = "100%";

        if(!active){
            settingsMobile = false


      document.querySelector("aside").style.display = "none";}
    }


  },
  true
);

$(document).scroll(function (e) {
  id = "h1";
  for (let i = 1; i <= 6; i++) {
    var current_top = $(this).scrollTop() + 1;
    $(document.getElementById(i)).each(function () {
      if (
        $(this).position().top <= current_top &&
        $(this).position().top + $(this).outerHeight() >= current_top
      ) {
        document.getElementById(id).classList.add("current-theme");
      } else {
        document.getElementById(id).classList.remove("current-theme");
      }
    });
    id = id.replace("h", "");
    id++;
    id = "h" + id;
  }
});

function DoesItCurrent(paramId) {
  var id = paramId;
  id = id.replace("h", "");
  const pNum = id;
  const scrollTarget = document.getElementById(pNum);
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

setTimeout(function () {
  $("body").addClass("body_visible");
}, 10);

if (localStorage.getItem("dark-mode") == "on") {
  darkModeOn();
}

function darkModeOn() {
  document.querySelector("body").classList.add("dark-mode");
  document
    .querySelector("#inst")
    .setAttribute("src", "Assets/Pictures/icons/dark/inst.png");
  document
    .querySelector("#vk")
    .setAttribute("src", "Assets/Pictures/icons/dark/vk.png");
  document
    .querySelector("#telegram")
    .setAttribute("src", "Assets/Pictures/icons/dark/telegram.png");
  document
    .querySelector("#git")
    .setAttribute("src", "Assets/Pictures/icons/dark/github.png");
  document
    .querySelector("#linkedin")
    .setAttribute("src", "Assets/Pictures/icons/dark/linkedin.png");
  try {
    document
      .querySelector("#geo")
      .setAttribute("src", "Assets/Pictures/icons/dark/planet.png");
  } catch {}
  localStorage.setItem("dark-mode", "on");

  document.querySelector(".toggle-checkbox").setAttribute("checked", "true");
}
function darkModeOff() {
  document.querySelector("body").classList.remove("dark-mode");
  document
    .querySelector("#inst")
    .setAttribute("src", "Assets/Pictures/icons/light/inst.png");
  document
    .querySelector("#vk")
    .setAttribute("src", "Assets/Pictures/icons/light/vk.png");
  document
    .querySelector("#telegram")
    .setAttribute("src", "Assets/Pictures/icons/light/telegram.png");
  document
    .querySelector("#git")
    .setAttribute("src", "Assets/Pictures/icons/light/github.png");
  document
    .querySelector("#linkedin")
    .setAttribute("src", "Assets/Pictures/icons/light/linkedin.png");
  try {
    document
      .querySelector("#geo")
      .setAttribute("src", "Assets/Pictures/icons/light/planet.png");
  } catch {}
  localStorage.setItem("dark-mode", "off");
}
function changeMode(checkboxElem) {
  if (checkboxElem.checked) {
    darkModeOn();
  } else {
    darkModeOff();
  }
}
