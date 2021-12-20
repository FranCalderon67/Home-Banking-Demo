//Constructor de objetos de usuarios

class cuenta {
  constructor(titular, movimientos, cuentaExt, ingresos, cuenta, usuario, pin) {
    (this.titular = titular),
      (this.movimientos = movimientos),
      (this.cuentaExt = cuentaExt),
      (this.ingresos = ingresos),
      (this.cuenta = cuenta),
      (this.usuario = usuario),
      (this.pin = pin);
  }
}
//Datos de Usuarios
const cuenta1 = new cuenta(
  "Francisco Calderon",
  [90000, 450, -400, 3000, -650, -130, 70, 1300],
  [100, 25],
  [],
  111111,
  "fc",
  1111
);

const cuenta2 = new cuenta(
  "Paula Sabatino",
  [95000, 3400, -150, -790, -3210, -1000, 8500, -30],
  [150, 35],
  [],
  222222,
  "ps",
  2222
);

const cuenta3 = new cuenta(
  "Emiliano Meneses",
  [100000, -200, 340, -300, -20, 50, 400, -460],
  [200, 45],
  [],
  333333,
  "em",
  3333
);

const cuentas = [cuenta1, cuenta2, cuenta3];

//Constantes de formulario de Ingreso
const btnIngreso = document.querySelector(".form-ingreso-boton");
const usuario = document.querySelector(".form-ingreso-usuario");
const pin = document.querySelector(".form-ingreso-pin");
const ingreso = document.getElementById("ingreso");

//Constantes de secciones
const menus = document.getElementById("menu");
const detalleCuenta = document.getElementById("cuentas");
const transferencias = document.getElementById("transferencia");
const prestamos = document.getElementById("prestamo");
//Botones de MENU
const btnCuentas = document.querySelector(".menu-lista-boton--cuentas");
const btnTransferencia = document.querySelector(".menu-lista-boton--transferencias");
const btnPrestamoMenu = document.querySelector(".menu-lista-boton--prestamos");
const btnCerrar = document.querySelector(".menu-lista-boton--cerrar");
//Constantes para actualizar la UI
const resumenCta = document.querySelector(".movimientos");
const resumenCtaDolar = document.querySelector(".movimientos-dolar");
const total = document.querySelector(".saldo");
const saldoExt = document.querySelector(".saldo-dolar");
const btnPrestamo = document.querySelector(".prestamo-form-boton");
const permitido = document.querySelector(".prestamo-form-solicitado-titulo");
const btnSolicitar = document.querySelector(".prestamo-form-solicitado-button");
const btnTransferir = document.querySelector(".transferencia-form-button");
const btnCalcularDolarCompra = $(".boton-calcular-compra");
const btnCalcularDolarVenta = $(".boton-calcular-venta");
const totalOperacion = $(".total-operacion");
const btnAceptarCompra = document.getElementById("boton-aceptar-compra");
const btnAceptarVenta = $("#boton-aceptar-venta");
const menuDivisa = document.getElementById("divisa");

//Eventos de botones de Menu
//Ingresar a la Seccion de cuentas
//Funcion para manipular el DISPLAY de la seccion

btnCuentas.addEventListener("click", function (e) {
  e.preventDefault();

  detalleCuenta.style.display = "block";
  detalleCuenta.style.zIndex = 1;

  prestamos.style.display = "none";
  prestamos.style.zIndex = -1;

  transferencias.style.display = "none";
  transferencias.style.zIndex = -1;
});

//Ingresar a la Seccion de transferencias
//Funcion para manipular el DISPLAY de la seccion

btnTransferencia.addEventListener("click", function (e) {
  e.preventDefault();

  detalleCuenta.style.display = "none";
  detalleCuenta.style.zIndex = -1;

  prestamos.style.display = "none";
  prestamos.style.zIndex = -1;

  transferencias.style.display = "block";
  transferencias.style.zIndex = 1;
});

//Ingresar a la Seccion de prestamos
//Funcion para manipular el DISPLAY de la seccion

btnPrestamoMenu.addEventListener("click", function (e) {
  e.preventDefault();

  detalleCuenta.style.display = "none";
  detalleCuenta.style.zIndex = -1;

  prestamos.style.display = "block";
  prestamos.style.zIndex = 1;

  transferencias.style.display = "none";
  transferencias.style.zIndex = -1;
});

//Boton para cerrar sesion
//Vuelve al formulario de ingreso

btnCerrar.addEventListener("click", function (e) {
  e.preventDefault();

  ingreso.style.display = "flex";
  ingreso.style.zIndex = 1;

  menus.style.display = "none";
  menus.style.zIndex = -1;

  menuDivisa.style.display = "none";

  usuario.value = pin.value = "";
  pin.blur();

  detalleCuenta.style.display = "none";
  detalleCuenta.style.zIndex = -1;

  prestamos.style.display = "none";
  prestamos.style.zIndex = -1;

  transferencias.style.display = "none";
  transferencias.style.zIndex = -1;

  limpiar();
});

//Animación pagina de logueo

$(".form-ingreso").slideUp(1).slideDown(400);

//Animación logo de pagina de logueo
$(".form-logo-ingreso").slideUp(1).slideDown(450);
