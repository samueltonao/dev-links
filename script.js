function toggleMode(){
const html = document.documentElement
html.classList.toggle("light")

//pegar a tag img
const img = document.querySelector("#profile img")
//substituir imagem
 if (html.classList.contains("light")) {
//se tiver light mode, adicionar img light
 img.setAttribute ("src", "./assets/assets/avatar-light.png") 
 }
 else {
 img.setAttribute ("src", "./assets/assets/avatar.png")
 }
}

