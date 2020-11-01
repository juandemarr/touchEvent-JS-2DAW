function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);//Igual que no poner false
    el.addEventListener("touchend", handleEnd);
    //el.addEventListener("touchcancel", handleCancel);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("click", ()=>alert("click"));
  }
  
  window.onload=inicio;
  //document.addEventListener("DOMContentLoaded", inicio);//DOMContentLoaded es un
  //evento, igual que poner window.onload=inicio

function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchstar";
}
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchend";
}
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML="touchmove";
}

