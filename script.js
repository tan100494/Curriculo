let menuVisible = false;
//Función que oculta o muestra el menu
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
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("AUTOCAD-2012");
        habilidades[1].classList.add("AUTOCAD-CIVIL-3D");
        habilidades[2].classList.add("S10");
        habilidades[3].classList.add("MICROSOFT-PROJECT-2013");
        habilidades[4].classList.add("MICROSOFT-OFFICE");
        habilidades[5].classList.add("SIAF");
        habilidades[6].classList.add("SISTEMA-NACIONAL-DE-PROGRAMACIÓN-MULTI-ANUAL-Y-GESTIÓN-DE-INVERSIONES-INVIERTE-PE");
        habilidades[7].classList.add("ESTRATEGIAS-DE-ENSEÑANZA-APRENDIZAJE");
        habilidades[8].classList.add("ELABORACIÓN-DE-INSTRUMENTOS-DE-EVALUACIÓN");
        habilidades[9].classList.add("GESTIÓN-DE-PROYECTOS-DE-INVERSIÓN-PÚBLICA-E-IOARR");
        abilidades[10].classList.add("GESTIÓN-RESIDENCIA-Y-SUPERVISIÓN-DE-OBRAS-PÚBLICAS-EN-MANTENIMIENTO-DE-INFRAESTRUCTURA");
        abilidades[11].classList.add("EVALUACIÓN-Y-ESTUDIO-DE-IMPACTO-AMBIENTAL");
        abilidades[12].classList.add("GESTIÓ-DE-SEGURIDAD-Y-SALUD-OCUPACIONAL-EN-MINERÍA");
        abilidades[13].classList.add("VALORIZACIÓN-RECEPCIÓN-Y-LIQUIDACIÓN-DE-OBRAS");
        abilidades[14].classList.add("TOMA-DE-DECISIONES");
        abilidades[15].classList.add("ELABORACIÓN-DE-DOCUMENTACIÓN");
        abilidades[16].classList.add("ELABORACIÓN-DE-INSTRUMENTOS-DE-EVALUACIÓN");
        abilidades[17].classList.add("GESTIÓN-ADMINISTRATIVA");
        abilidades[18].classList.add("CONOCIMIENTOS-DE-OFIMÁTICA");
        abilidades[19].classList.add("EXPERIENCIA-COMO-SUPERVISOR-DE-OBRA");
        abilidades[20].classList.add("EXPERIENCIA-COMO-SUPERVISOR-DE-OBRA");
        abilidades[21].classList.add("CONOCIMIENTO-Y-EXPERIENCIA-EN-CARRETERAS-Y-AUTOVÍAS");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 