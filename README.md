## EnMedioTest Info
Prueba tecnica de  desarrollo para la empresa ENMEDIO





swagger documentation: 

http://localhost:8081/api-docs/

## Documentacion

1) Justificación del modelo de BD:

No relacional: La naturaleza flexible de MongoDB permite almacenar información jerarquizada como las ventas de productos y el clima asociado a cada venta, sin la necesidad de rígidas relaciones tabulares.
Escalabilidad: MongoDB se adapta a un crecimiento en el volumen de datos, ideal para el manejo de inventario y registro de ventas.
Consultas eficientes: Las consultas con índices y agregaciones en MongoDB son eficientes para recuperar información específica de productos y ventas.

2) Modelo:

_id: (ObjectId) Identificador único del producto.
nombre: (String) Nombre del producto.
precio: (Number) Precio del producto.
clasificacion: (String) Clasificación del producto (ej: Café, Té, Bebida).
stock: (Number) Cantidad de unidades disponibles en stock.
metodoPago: (String) Forma de pago aceptada para el producto (ej: Efectivo, Tarjeta).
ventas: (Array) Arreglo de objetos que representan las ventas del producto.
    fechaVenta: (Date) Fecha de la venta.
    unidadesVendidas: (Number) Unidades vendidas en la venta.
    clima: (String) Clima en el momento de la venta.

![Modelo Relacional de la base de datos](https://github.com/zafo351/EnMedioTest/blob/main/ModeloDB.png)

## Configuration 

0) Como forma eficiente de ejecucion se uso docker para ejecutar de forma local solo se debe ejcutar el siguiente comanto y ejecutara todas los servicios y aplicaciones necesarias:
```bash
    $ docker-compose up 
```

1) Ejecutar el comando para instalar dependencias:
```bash
    $ npm i 
```
2) Ejecutar el comando para compilar la aplicacion:
```bash
    $ npm tsc 
```

3) Ejecutar comando para subir la base de datos:
```bash
    $ docker-compose up
```

4) Ejecutar comandos de actualizacion ORM:
```bash
    $ npx prisma db pull

    $ npx prisma generate 
```

5) Ejecutar comando para iniciar la aplicacion:
```bash
    $ npm run start:dev
```