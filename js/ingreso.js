//Variable que toma los valores del usuario que inicie sesion
let cuentaActual;

//Evento y funcion para validar los datos del usuario que inicia sesion

btnIngreso.addEventListener("click", function (e) {
  e.preventDefault();
  cuentaActual = cuentas.find((cta) => cta.usuario === usuario.value);

  if (cuentaActual?.pin === Number(pin.value)) {
    ingreso.style.display = "none";

    detalleCuenta.style.display = "block";
    menus.style.display = "block";
    menuDivisa.style.display = "block";

    swal("Bienvenido", `${cuentaActual.titular}`, "success");
  } else {
    swal("Datos Incorrectos");
    usuario.value = pin.value = "";
    pin.blur();
  }
  //Funciones para actulizar la UI, segun el usuario que inicie sesion
  mostrarMovimiento();
  mostrarSaldo();
  mostrarMovimientoDolar();
  mostrarSaldoDolar();
});

//Funcion para eliminar todos los datos del HTML
//del usuario que esta cerrando sesion

function limpiar() {
  resumenCta.innerHTML = "Movimientos";
  total.innerHTML = "Saldo";
  resumenCtaDolar.innerHTML = "Movimientos";
  saldoExt.innerHTML = "Saldo";
  localStorage.removeItem("montoTransferido");
  localStorage.removeItem("cuentaDestino");
  localStorage.removeItem("nombre");
  localStorage.removeItem("diaOperacion");
}
