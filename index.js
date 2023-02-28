var navbar = document.querySelector(".nav-container")
window.onscroll =() => {
    if (window.scrollY >20){
        navbar.classList.add("nav-active");
    }else {
        navbar.classList.remove("nav-active");
    }
}

const nombre = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener ("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        warnings += 'El nombre no es válido <br>'
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += 'El Email no es válido <br>'
        entrar = true
    }
    if (entrar){
        parrafo.innerHTML = warnings
    }
})