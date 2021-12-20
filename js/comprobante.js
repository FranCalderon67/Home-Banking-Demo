//Seteo de constantes para posicionar la informacion en el comprobante
const nombreTransferencia = document.getElementById("nombreCredito");
const cuentaTransferencia = document.getElementById("cuentaCredito");
const montoTransferencia = document.getElementById("montoCredito");
const fechaOperacion = document.getElementById("fecha");
//Constantes para setear el localStorage de las Transferencias
//La informacion se trae de los inputs de la seccion de transferencias
//para completar los datos del comprobante de transferencia que el usuario puede descargar

const nombreDestino = localStorage.getItem("nombre");
const cuentaCredito = localStorage.getItem("cuentaDestino");
const montoCredito = localStorage.getItem("montoTransferido");
const diaCredito = localStorage.getItem("diaOperacion");
//Seteo para buscar la informacion en el localStorage
nombreTransferencia.textContent = `Nombre y apellido : ${nombreDestino}`;
cuentaTransferencia.textContent = `Cuenta credito: ${cuentaCredito}`;
montoTransferencia.textContent = `Monto de la operación: $${montoCredito}`;
fechaOperacion.textContent = `Fecha de la operación: ${diaCredito}`;

//Funcion para descargar el comprobante en PDF
//a partir del click en el boton "Descargar"
//para esto usamos JSPDF

const comprobante = new jsPDF();
const comprobanteTransferencia = $(".cardTransferencia").html();

const specialElementHandlers = {
  "#elementH": function (element, renderer) {
    return true;
  },
};

//Boton para que se descargue el PDF
const btnDescargar = $(".descargarComprobante");
btnDescargar.click(function (e) {
  e.preventDefault();

  comprobante.fromHTML(comprobanteTransferencia, 15, 15, {
    width: 500,

    elementHandlers: specialElementHandlers,
  });

  comprobante.save("transferencia.pdf");
});
