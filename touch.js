function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);//Igual que no poner false
    el.addEventListener("touchend", handleEnd);
    //el.addEventListener("touchcancel", handleCancel);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("click", ()=>alert("click"));

    if(window.DeviceOrientationEvent)
        window.addEventListener("deviceorientation",orientacion);
        //primero chequeamos si el navegador soporta la orientacion, entonces 
        //se lo aplicamos a window
    else
        alert("No soporta las funciones de orientacion");
  }
  
  window.onload=inicio;
  //document.addEventListener("DOMContentLoaded", inicio);//DOMContentLoaded es un
  //evento, igual que poner window.onload=inicio

function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchstar "+evt.touches[0].pageX+" "+evt.touches[0].pageY;
}
//touchEvent (evento)
    //touches (ArrayList con los objetos touch)
        //touch (Objeto)
            //pageX (coord x)
            //pageY
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchend";
}
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchmove "+evt.touches[0].pageX+" "+evt.touches[0].pageY;
}

function orientacion(e){
    document.getElementById("log").innerHTML+="<br>Alpha: "+e.alpha;
    document.getElementById("log").innerHTML+="<br>Beta: "+e.beta;
    document.getElementById("log").innerHTML+="<br>Gamma: "+e.gamma;
}
