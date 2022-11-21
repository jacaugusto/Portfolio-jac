let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

//se oculta el menu una vez que selecciono la opcion
function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false
}

//funcion que aplica las animaciones de las habilidades
//detecto el acrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function efectoAbilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso")
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("MySql");
        habilidades[3].classList.add("Java");
        habilidades[4].classList.add("Python");
        habilidades[5].classList.add("Documentacion-UML");
        habilidades[6].classList.add("Comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("Creatividad");
        habilidades[9].classList.add("Dedicacion");
        habilidades[10].classList.add("Scrum");
    }

 }

