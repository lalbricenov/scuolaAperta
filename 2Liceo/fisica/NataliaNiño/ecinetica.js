let pantallas =["energia", "ecinética", "epotencial", "consere"]

let mostrar = function (id) {
    let aMostrar = document.querySelector("#" + id);
    aMostrar.style.display = "block";
    for (pantalla of pantallas) {
      if (pantalla !== id)
        document.querySelector("#" + pantalla).style.display = "none";
    }
  };

  mostrar("energia");
  let prueba = function(){
      console.log("Boton clickeado!")
  }

  let botonesCine = document.getElementsByClassName("irEcine");
  for(boton of botonesCine) {
      boton.onclick = () => mostrar("ecinética")
  }

  let botonesPo = document.getElementsByClassName("irEpo");
  for(boton of botonesPo) {
      boton.onclick = () => mostrar("epotencial")
  }

  let botonesCone = document.getElementsByClassName("irConE");
  for(boton of botonesCone) {
      boton.onclick = () => mostrar("consere")
  }