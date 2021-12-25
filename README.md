# Francis Bank.

Proyecto final del curso de JavaScript de Coder House comisión 19965.
En este proyecto hice un bot de un home banking en el que podemos hacer transferencias, solicitar prestamos y comprar y vender dolares.
Consumi una API para obtener el valor del dolar a traves del metodo $.get y tambien vas a poder generar un archivo PDF como comprobante
de las transferencias que realices.

## Tecnologias utilizadas.

- HTML
- CSS
- JavaScript
- Bootstrap
- JQuery
- JSPDF

### Realizar test.

Para realizar el test cree tres usuarios de tipo objeto. Los datos son:

- Usuario 1: fc
- Contraseña: 1111
- Usuario 2: ps
- Contraseña: 2222
- Usuario 3: em
- Contraseña: 3333

### Funcionalidad

En el proyecto tenemos tres secciones:

- Cuentas
- Transferencias
- Prestamos
- Comprar/Vender Dolar
- Cerrar Sesión

Cada una de estas secciones esta en un mismo HTML, cada vez que el usuario haga click en los distintos titulos modificara la propiedad
"display" a "none" de la que este viendo actualmente y modificara el propiedad "display" a "block" de la sección a la que este
ingresando.

#### Cuentas

En esta sección podemos ver los datos de Movimientos en pesos y en dolares de cada uno de los objetos. Todas las operaciones
que realicemos van a impactar en el array que corresponda (pesos o dolares), sumando o restando y actualizando los saldos de cada uno.
Por ejemplo, si realizamos una transferencia, la suma que se transfiera se pushea en negativo al array de Movimientos del objeto
y resta en el saldo, el cual obtenemos a traves del metodo "reduce".

### Transferencias

En esta sección podemos realizar la simulación de realizar una transferencia directa. Debemos de completar el formulario con el nombre y
número de cuenta a donde queremos transferir y el monto a transferir. Se implementó una condición para que el usuario no pueda transferir
un monto mayor al de su saldo.
Una vez que se realiza la transferencia podemos obtener el comprobante haciendo click en el boton "comprobante" y nos llevara a un nuevo HTML
para poder descargar el comprobante en PDF.
Realizada la transferencia se pushea el monto en negativo al array de Movimientos y se actualiza el saldo del objeto.

### Prestamos

Para esta sección realizamos tres tarjetas con un monto pre establecido. El prestamo que el usuario solicite se pushea al array de
Movimientos del objeto en positivo y se actualiza el saldo.

### Comprar/Vender Dolar

Esta sección es estatica y queda visible en todas las secciones por las que el usuario puede navegar. La cotización la traemos de una API.
Para realiza la compra el usuario debe de hacer click en el boton "comprar" y se le mostrara un modal en donde debe ingresar cuanto quiere comprar.
Aqui el usuario tiene dos opciones, puede directamente realizar la compra o visualizar el calculo previo para saber cuanto sera el costo. Una
vez que se acepta la compra se actualizan los saldos del array de Movimientos y del array de cuentaExt.
Lo mismo aplica para la venta, el usuario debe de hacer click en el boton "vender" y tendra las mismas opciones, aceptar directamente la compra o
visualizar el calculo de la operación.

### Cerrar Sesión.

Aqui no hay nada muy complejo, cuando el usuario haga click en esta opción volver a la página de iniciar sesión.

### Pre-requisitos.

Tambíen inclui un archivo.json para traer información estatica, por lo que es necesario instalar live-server.
El IDE que utilice es VSCode. Lo puedes instalar desde aqui:

- [VSCode](https://code.visualstudio.com/)

Recuerda seleccionar el instalador para tu sistema operativo.
Luego de que hayas instalado VSCode, tienes que realizar la instalación de live-server via npm.
Para esto debes abrir una nueva terminal en VSCode y tipear:

```
npm install -g live-server
```

Una vez que la instalación haya finalizado, en la misma terminal tipea live-server.

### Contacto.

Si quieres ponerte en contacto conmigo puedes encotrarme en LinkedIn.

- [Francisco Calderon](https://www.linkedin.com/in/francalders67/)
