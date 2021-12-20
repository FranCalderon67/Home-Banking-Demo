//Constantes para generar la informacion de FECHA
const fecha = new Date();
const año = fecha.getFullYear().toString();
const dia = fecha.getDate().toString();
const mes = fecha.getMonth().toString();

//Evento y funcion de la seccion transferencia

btnTransferir.addEventListener("click", function (e) {
  e.preventDefault();
  //Constantes para almacenar los datos de los inputs de la seccion de transferencias
  const nombreDestino = document.querySelector(".transferencia-form-nombre").value;
  const ctaDestino = document.querySelector(".transferencia-form-cuenta").value;
  const inputMonto = document.querySelector(".transferencia-form-monto").value;
  const fechaCard = dia + "/" + mes + "/" + año;
  //Sumas todos los elementos del array de movimientos del objeto
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const saldo = cuentaActual.movimientos.reduce(sum);
  //Validacion para que el usuario no pueda transferir mas
  //del total del array de movimientos del objeto
  //Se guarda en el localStorage para poder generar el comprobante
  if (Number(inputMonto) <= saldo) {
    cuentaActual.movimientos.push(Number(inputMonto) * -1);
    localStorage.setItem("montoTransferido", inputMonto);
    localStorage.setItem("nombre", nombreDestino);
    localStorage.setItem("cuentaDestino", ctaDestino);
    localStorage.setItem("diaOperacion", fechaCard);
    swal({
      title: "Transferencia realizada por:",
      text: `$ ${Number(inputMonto)}`,
      button: "Aceptar",
    });
    //Funciones para actualizar la UI de la seccion cuentas
    actualizarSaldo();
    agregarFinal();
  } else {
    swal("Oops", "Saldo insufuciente", "error");
  }
});
