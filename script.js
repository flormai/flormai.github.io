let menuVisible = false;
//se oculta o mustra la barra del menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //desaparece el menu una vez que elijo una opcion (probar!!)
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//habilidades y porcentajes (controlar bien esto!)

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("comunicacion");
        habilidades[3].classList.add("trabajo");
        habilidades[4].classList.add("atencion");
    }
}

window.onscroll = function(){
    efectoHabilidades();
} 