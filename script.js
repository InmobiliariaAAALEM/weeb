//Funcion que me aplica el estilo a la opcion seleccionada en el menuy quita la previamente seleccionado
function seleccionar(link){
    var opcion = document.querySelectorAll("#links a")
    opcion[0].className = "";
    opcion[1].className = "";
    opcion[2].className = "";
    opcion[3].className = "";
    link.className = "seleccionado";
    //hacemos desaparecer el menu una vez que se ha seleccionado una opcion en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}
//fucion que muestra el menu responcive 
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
       x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barras de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funciones que aplican la animación de la barra de animación 
function efectoHablidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}