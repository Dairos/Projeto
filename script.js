function toggleMode() {
  const html = document.documentElement
  //toggle, uma função já existente de "botão switch"
  html.classList.toggle("light")

  const img = document.querySelector("#profile")
  if (html.classList.contains("light")) {
    //mudando atributo da img de acordo com o fundo
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Mayk Brito de óculos")
  } else {
    img.setAttribute("src", "./assets/perfil-dairos.png")
  }
}
