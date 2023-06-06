function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  let img = document.querySelector("#profile img")
  if (html.classList.contains("ligth")) {
    img.setAttribute("alt", "Novo Alt")
  } else {
    img.setAttribute("alt", "Antigo Alt")
  }
}
