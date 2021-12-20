//Consumo de API para traer los valores de compra venta de dolar
const URLdolar = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
//Variables para almacenar los valores del cambio
let valorCompra;
let valorVenta;

//Funcion para traer los valores del JSON de la API
//y guardarlo en variables para poder hacer operaciones
$.get(URLdolar, function (data, status) {
  if (status === "success") {
    valorCompra = parseFloat(data[0].casa.compra.replace(",", "."));
    valorVenta = parseFloat(data[0].casa.venta.replace(",", "."));

    const dolarCompra = $(".dolar-compra");
    const dolarVenta = $(".dolar-venta");

    dolarCompra.text(`Dolar compra: $${valorCompra}`);
    dolarVenta.text(`Dolar venta: $${valorVenta}`);
  }
});

//Funciones para actualizar la UI
let compraUsuario;
//Funcion de evento del boton calcular dentro del modal
//de compra dolar. Muestra el total de pesos para cambiar
btnCalcularDolarCompra.click(function (e) {
  e.preventDefault();

  compraUsuario = $("#comprar-dolar")
    .keyup(function () {
      let value = $(this).val();
      $(".total-operacion-compra").text("Total" + " " + "$" + value * valorVenta);
    })
    .keyup();
});
//Boton de aceptar la compra.
btnAceptarCompra.addEventListener("click", function (e) {
  e.preventDefault();

  compraUsuario = $("#comprar-dolar")
    .keyup(function () {
      let value = $(this).val();
      $(".total-operacion-compra").text("Total" + " " + "$" + value * valorVenta);
    })
    .keyup();

  cuentaActual.cuentaExt.push(Number(compraUsuario.val()));
  cuentaActual.movimientos.push(Number(compraUsuario.val() * valorVenta * -1));
  //Funciones para actualizar la UI
  agregarFinal();
  actualizarSaldo();
  agregarFinalDolar();
  actualizarSaldoDolar();
});

let ventaUsuario;
//Funcion de evento del boton calcular dentro del modal
//de venta dolar. Muestra el total de dolares para cambiar
btnCalcularDolarVenta.click(function (e) {
  e.preventDefault();

  ventaUsuario = $("#vender-dolar")
    .keyup(function () {
      let value = $(this).val();
      $(".total-operacion-venta").text("Total" + " " + "$" + value * valorCompra);
    })
    .keyup();
});
//Boton de aceptar la venta.
btnAceptarVenta.click(function (e) {
  e.preventDefault();

  ventaUsuario = $("#vender-dolar")
    .keyup(function () {
      let value = $(this).val();
      $(".total-operacion-venta").text("Total" + " " + "$" + value * valorCompra);
    })
    .keyup();

  cuentaActual.cuentaExt.push(Number(ventaUsuario.val() * -1));
  cuentaActual.movimientos.push(Number(ventaUsuario.val() * valorCompra));
  //Funciones para actualizar la UI
  agregarFinal();
  actualizarSaldo();
  agregarFinalDolar();
  actualizarSaldoDolar();
});

//Consumo de cotizacion.json
const displayCotizacion = document.querySelector(".cotizacionCarousel");

//Display de propiedades de cotizacion.json
$.getJSON("js/cotizacion.json", function (data) {
  for (const datos of data) {
    displayCotizacion.textContent +=
      ` ${datos.nombre}: Compra: $${datos.compra} Venta: $${datos.venta};`.toUpperCase();
  }
});
