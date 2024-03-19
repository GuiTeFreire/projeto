function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    document.querySelector("footer").textContent = "Feito pela Mary"
  } else {
    document.querySelector("footer").textContent = "Feito pelo Gui"
  }
}
