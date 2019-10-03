import "./index.scss";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello world";
  element.className = "main";

  return element;
}

document.body.appendChild(component());
