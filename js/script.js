function ToggleNavvbar() {
    document.querySelector(".main-menu").classList.toggle("show");
}

document.querySelector(".menu-btn").addEventListener("click", ToggleNavvbar);



//Tabla Primera división

function ordenarTabla() {
    var tabla, filas, switching, i, x, y, shouldSwitch;
    tabla = document.getElementById("tablaPosiciones");
    switching = true;
  
    while (switching) {
      switching = false;
      filas = tabla.rows;
  
      for (i = 1; i < (filas.length - 1); i++) {
        shouldSwitch = false;
  
        x = filas[i].getElementsByTagName("TD")[8];
        y = filas[i + 1].getElementsByTagName("TD")[8];
  
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
        switching = true;
      }
    }
  
    // Actualiza la columna de posiciones
    for (i = 1; i < filas.length; i++) {
      filas[i].getElementsByTagName("TD")[0].innerHTML = i;
    }
  }
  
  ordenarTabla();