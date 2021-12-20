//Constantes para modificar el textContent en el HTML
const textoPrestamoBajo = document.getElementById("prestamoBajo");
const textoPrestamoMedio = document.getElementById("prestamoMedio");
const textoPrestamoAlto = document.getElementById("prestamoAlto");
//Constantes para establecer valores de prestamos
const prestamoBajo = 10000;
const prestamoMedio = 15000;
const prestamoAlto = 25000;
//Constante para establecer tasa de interes del prestamo
const interes = 0.43;
//Contenido del textContent
textoPrestamoBajo.textContent = `Tienes un prestamo pre aprobado de $${prestamoBajo}. Puedes pagarlo en:`;
textoPrestamoMedio.textContent = `Tienes un prestamo pre aprobado de $${prestamoMedio}. Puedes pagarlo en:`;
textoPrestamoAlto.textContent = `Tienes un prestamo pre aprobado de $${prestamoAlto}. Puedes pagarlo en:`;

//Funciones para crear Inputs Radio dentro de las cards de prestamos
function crearRadioBajo(card) {
  let selectorRadio = document.createElement("div");
  selectorRadio.innerHTML = `
  <form>
  <div>
  <input type="radio" name="cuota" value = "12"> 12 cuotas de $ ${(
    (prestamoBajo * interes + prestamoBajo) /
    12
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 24 cuotas de $ ${(
    (prestamoBajo * interes + prestamoBajo) /
    24
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 36 cuotas de $ ${(
    (prestamoBajo * interes + prestamoBajo) /
    36
  ).toFixed(2)} </input>
  </div>
  </form>
  `;
  card.appendChild(selectorRadio);
}
function crearRadioMedio(card) {
  let selectorRadio = document.createElement("div");

  selectorRadio.innerHTML = `
  <form>
  <div>
  <input type="radio" name="cuota" value = "12"> 12 cuotas de $ ${(
    (prestamoMedio * interes + prestamoMedio) /
    12
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 24 cuotas de $ ${(
    (prestamoMedio * interes + prestamoMedio) /
    24
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 36 cuotas de $ ${(
    (prestamoMedio * interes + prestamoMedio) /
    36
  ).toFixed(2)} </input>
  </div>
  </form>
  `;
  card.appendChild(selectorRadio);
}

function crearRadioAlto(card) {
  let selectorRadio = document.createElement("div");

  selectorRadio.innerHTML = `
  <form>
  <div>
  <input type="radio" name="cuota" value = "12"> 12 cuotas de $ ${(
    (prestamoAlto * interes + prestamoAlto) /
    12
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 24 cuotas de $ ${(
    (prestamoAlto * interes + prestamoAlto) /
    24
  ).toFixed(2)} </input>
  </div>
  <div>
  <input type="radio" name="cuota" value = "12"> 36 cuotas de $ ${(
    (prestamoAlto * interes + prestamoAlto) /
    36
  ).toFixed(2)} </input>
  </div>
  </form>
  `;
  card.appendChild(selectorRadio);
}
//Llamado de funciones para crear los inputs radio de cada uno de los prestamos
crearRadioBajo(textoPrestamoBajo);
crearRadioMedio(textoPrestamoMedio);
crearRadioAlto(textoPrestamoAlto);
//Constantes de los botones para solicitar prestamos
const btnPrestamoBajo = document.querySelector(".botonPrestamoBajo");
const btnPrestamoMedio = document.querySelector(".botonPrestamoMedio");
const btnPrestamoAlto = document.querySelector(".botonPrestamoAlto");

//Eventos y funciones para solicitar uno de los prestamos
btnPrestamoBajo.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  cuentaActual.movimientos.push(prestamoBajo);
  //Funciones para actualizar la UI de la seccion cuentas
  actualizarSaldo();
  agregarFinal();
  swal(
    "Felicitaciones! Tu credito por",
    `$ ${cuentaActual.movimientos[cuentaActual.movimientos.length - 1]} se ha acreditado`,
    "success"
  );
  //Modificacion del display para no repetir el click y
  //que el usuario pueda pedir mas prestamos
  btnPrestamoBajo.style.display = "none";
  btnPrestamoMedio.style.display = "none";
  btnPrestamoAlto.style.display = "none";
});

btnPrestamoMedio.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  cuentaActual.movimientos.push(prestamoMedio);
  actualizarSaldo();
  agregarFinal();
  swal(
    "Felicitaciones! Tu credito por",
    `$ ${cuentaActual.movimientos[cuentaActual.movimientos.length - 1]} se ha acreditado`,
    "success"
  );
  btnPrestamoBajo.style.display = "none";
  btnPrestamoMedio.style.display = "none";
  btnPrestamoAlto.style.display = "none";
});

btnPrestamoAlto.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  cuentaActual.movimientos.push(prestamoAlto);
  actualizarSaldo();
  agregarFinal();
  swal(
    "Felicitaciones! Tu credito por",
    `$ ${cuentaActual.movimientos[cuentaActual.movimientos.length - 1]} se ha acreditado`,
    "success"
  );
  btnPrestamoBajo.style.display = "none";
  btnPrestamoMedio.style.display = "none";
  btnPrestamoAlto.style.display = "none";
});
