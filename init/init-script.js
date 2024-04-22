db.createCollection("produc");

db.produc.insert([
  {
    Pid: 999,
    nombre: "cafe expreso",
    precio: 6000,
    clasificacion: "cafe",
    stock: 6,
    metodoPago: "Tarjeta",
    ventas: {
        fechaVenta: '22-04-2024',
        unidadesVendidas: 5,
        clima: "Calido",
    },
  }
]);