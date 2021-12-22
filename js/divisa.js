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

const compraUsuario = document.getElementById("comprar-dolar");

//Funcion de evento del boton calcular dentro del modal
//de compra dolar. Muestra el total de pesos para cambiar
btnCalcularDolarCompra.click(function (e) {
  e.preventDefault();

  let value = Number(compraUsuario.value);

  let compra = value * valorVenta;

  $(".total-operacion-compra").text(`Total $${compra}`);
});
//Boton de aceptar la compra.
btnAceptarCompra.addEventListener("click", function (e) {
  e.preventDefault();
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const saldo = cuentaActual.movimientos.reduce(sum);

  let valueCompra = Number(compraUsuario.value);

  let compra = valueCompra * valorVenta;

  if (compra <= saldo) {
    cuentaActual.cuentaExt.push(valueCompra);
    cuentaActual.movimientos.push(compra * -1);

    agregarFinal();
    actualizarSaldo();
    agregarFinalDolar();
    actualizarSaldoDolar();
  } else {
    swal("Oops", "Saldo insufuciente", "error");
  }
});

const ventaUsuario = document.getElementById("vender-dolar");
//Funcion de evento del boton calcular dentro del modal
//de venta dolar. Muestra el total de dolares para cambiar
btnCalcularDolarVenta.click(function (e) {
  e.preventDefault();

  let valueVenta = Number(ventaUsuario.value);

  let venta = valueVenta * valorCompra;

  $(".total-operacion-venta").text(`Total $${venta}`);
});
//Boton de aceptar la venta.
btnAceptarVenta.click(function (e) {
  e.preventDefault();
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const saldoDolar = cuentaActual.cuentaExt.reduce(sum);

  let valueVenta = Number(ventaUsuario.value);

  let venta = valueVenta * valorCompra;

  if (valueVenta <= saldoDolar) {
    cuentaActual.movimientos.push(venta);
    cuentaActual.cuentaExt.push(valueVenta * -1);

    agregarFinal();
    actualizarSaldo();
    agregarFinalDolar();
    actualizarSaldoDolar();
  } else {
    swal("Oops", "Saldo insufuciente", "error");
  }
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
