//Variable que usamos para appendChild en HTML
let saldoContainer;

//Funciones para mostrar en HTML el array de movimientos dentro del objeto
//y de movimientos de cuenta extranjera (CuentaExt)

function mostrarMovimiento() {
  for (const movimiento of cuentaActual.movimientos) {
    let li = document.createElement("li");
    li.innerHTML = `$ ${movimiento}`;
    resumenCta.appendChild(li);
  }
}

function mostrarMovimientoDolar() {
  for (const movimiento of cuentaActual.cuentaExt) {
    let li = document.createElement("li");
    li.innerHTML = `USD$ ${movimiento}`;
    resumenCtaDolar.appendChild(li);
  }
}

//Funcion para actualizar la UI del usuario
//Realiza la suma del array de movimientos dentro del objeto
function mostrarSaldo() {
  //Sumas todos los elementos del array de movimientos del objeto
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const saldo = cuentaActual.movimientos.reduce(sum);
  saldoContainer = document.createElement("div");
  saldoContainer.innerHTML = `$ ${saldo}`;
  total.appendChild(saldoContainer);
}

function mostrarSaldoDolar() {
  //Sumas todos los elementos del array de cuenta extranjera del objeto (cuentaExt)
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const saldo = cuentaActual.cuentaExt.reduce(sum);
  saldoContainer = document.createElement("div");
  saldoContainer.innerHTML = `USD$ ${saldo}`;
  saldoExt.appendChild(saldoContainer);
}

//Funcion para actualizar los datos del array de movimientos dentro
//del objeto del usuario que inicie sesion.
//Actualizar la UI segun lo que el usuario haga
function actualizarSaldo() {
  //Sumas todos los elementos del array de movimientos del objeto
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const actualizacion = cuentaActual.movimientos.reduce(sum);
  saldoContainer.innerHTML = "";
  let actualizacionContainer = document.createElement("div");
  actualizacionContainer.innerHTML = `$ ${actualizacion}`;
  total.textContent = "Saldo";
  total.appendChild(actualizacionContainer);
}
function actualizarSaldoDolar() {
  //Sumas todos los elementos del array de cuentaExt del objeto
  const sum = (valorPrevio, valorActual) => valorPrevio + valorActual;
  const actualizacionDolar = cuentaActual.cuentaExt.reduce(sum);
  let actualizacionContainerDolar = document.createElement("div");
  actualizacionContainerDolar.innerHTML = `USD$ ${actualizacionDolar}`;
  saldoExt.textContent = "Saldo";
  saldoExt.appendChild(actualizacionContainerDolar);
}

//Funcion para agregar datos numericos al final del array de movimientos
//dentro del objeto. Pueden ser valores positivos o negativos

function agregarFinal() {
  const ultimoNumero = cuentaActual.movimientos[cuentaActual.movimientos.length - 1];
  let li = document.createElement("li");
  li.innerHTML = `$ ${ultimoNumero}`;
  resumenCta.appendChild(li);
}

function agregarFinalDolar() {
  const ultimoNumero = cuentaActual.cuentaExt[cuentaActual.cuentaExt.length - 1];
  let li = document.createElement("li");
  li.innerHTML = `USD$ ${ultimoNumero}`;
  resumenCtaDolar.appendChild(li);
}
