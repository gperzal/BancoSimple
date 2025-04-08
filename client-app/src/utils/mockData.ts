// Mock user data
export const userData = {
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    accounts: [
      {
        id: "acc1",
        name: "Cuenta Corriente",
        number: "****-****-****-1234",
        balance: 360000,
        currency: "CLP"
      },
      {
        id: "acc2",
        name: "Cuenta de Vista",
        number: "****-****-****-5678",
        balance: 45000,
        currency: "CLP"
      }
    ]
  };
  
  export const User = {
    id: 1,
    uuid: "550e8400-e29b-41d4-a716-446655440000",
    nombres: "Juan Carlos",
    apellidos: "Rodríguez Pérez",
    correo: "juan.rodriguez@example.com",
    telefono: "+56 9 1234 5678",
    documento_tipo: "RUT",
    documento_numero: "12.345.678-9",
    fecha_nacimiento: new Date("1985-07-15"),
    fecha_registro: new Date("2022-03-10"),
    estado_id: 1,
    direcciones: [
      {
        id: 1,
        tipo_direccion: "residencial",
        calle: "Av. Providencia",
        numero: "1234",
        comuna: "Providencia",
        ciudad: "Santiago",
        region: "Metropolitana",
        codigo_postal: "7500000",
        pais: "Chile",
        activa: true
      }
    ]
  };

  // Mock frequent accounts
  export const frequentAccounts = [
    {
      id: "freq1",
      name: "María González",
      accountNumber: "ES91 2100 0418 4502 0005 1332",
      bank: "BBVA",
      lastTransfer: "2023-09-15"
    },
    {
      id: "freq2",
      name: "Carlos Rodríguez",
      accountNumber: "ES29 2100 1745 4702 0013 8521",
      bank: "Santander",
      lastTransfer: "2023-10-02"
    },
    {
      id: "freq3",
      name: "Ana Martínez",
      accountNumber: "ES05 0081 0297 1500 0188 6390",
      bank: "CaixaBank",
      lastTransfer: "2023-10-10"
    },
    {
      id: "freq4",
      name: "Luis Sánchez",
      accountNumber: "ES68 0049 1500 0512 3456 7890",
      bank: "Sabadell",
      lastTransfer: "2023-08-28"
    },
    {
      id: "freq5",
      name: "Elena Torres",
      accountNumber: "ES79 2100 0813 6101 2345 6789",
      bank: "BBVA",
      lastTransfer: "2023-09-22"
    },
    {
      id: "freq6",
      name: "Pedro Rodríguez",
      accountNumber: "ES29 2100 1745 4702 0013 8521",
      bank: "Santander",
      lastTransfer: "2023-10-02"
    },
    {
      id: "freq7",
      name: "Sara González",
      accountNumber: "ES91 2100 0418 4502 0005 1332",
      bank: "BBVA",
      lastTransfer: "2023-09-15"
    },
    {
      id: "freq8",
      name: "Miguel Rodríguez",
      accountNumber: "ES29 2100 1745 4702 0013 8521",
      bank: "Santander",    
      lastTransfer: "2023-10-02"
    },
    {
      id: "freq9",
      name: "Sara González",
      accountNumber: "ES91 2100 0418 4502 0005 1332",
      bank: "BBVA",
      lastTransfer: "2023-09-15"
    },
    {
      id: "freq10",
      name: "Miguel Rodríguez",
      accountNumber: "ES29 2100 1745 4702 0013 8521",
      bank: "Santander",
      lastTransfer: "2023-10-02"
    },
  ];
  
  // Mock transaction history
  export const transactions = [
    {
      id: 1,
      producto_id_origen: null,
      producto_id_destino: 201,
      monto: 50000,
      moneda: "CLP",
      descripcion: "Nómina Octubre",
      categoria: "transferencia",
      referencia_externa: null,
      estado_id: 1,
      fecha: "2023-10-15",
    },
    {
      id: 2,
      producto_id_origen: 201,
      producto_id_destino: null,
      monto: 15000,
      moneda: "CLP",
      descripcion: "Supermercado Día",
      categoria: "compra",
      referencia_externa: null,
      estado_id: 1,
      fecha: "2023-10-14",
    },
    {
      id: 3,
      producto_id_origen: 201,
      producto_id_destino: 202,
      monto: 5000,
      moneda: "CLP",
      descripcion: "Transferencia a Carlos",
      categoria: "transferencia",
      referencia_externa: null,
      estado_id: 1,
      fecha: "2023-10-10",
    },
    {
      id: 4,
      producto_id_origen: null,
      producto_id_destino: 201,
      monto: 15500,
      moneda: "CLP",
      descripcion: "Devolución préstamo",
      categoria: "transferencia",
      referencia_externa: null,
      estado_id: 1,
      fecha: "2023-10-05",
    },
    {
      id: 5,
      producto_id_origen: 201,
      producto_id_destino: null,
      monto: 10000,
      moneda: "CLP",
      descripcion: "Factura electricidad",
      categoria: "pago_servicios",
      referencia_externa: null,
      estado_id: 1,
      fecha: "2023-10-03",
    },
    {
      id: 6,
      producto_id_origen: 201,
      producto_id_destino: null,
      monto: 25000,
      moneda: "CLP",
      descripcion: "Orden #ECO123456",
      categoria: "compra",
      referencia_externa: "Orden Ecomarket",
      estado_id: 1,
      fecha: "2023-10-01",
    },
  ];



  // Mock data based on the database structure
  export const monthlyTransactionData = [
  { month: "Ene", ingresos: 4200000, gastos: 3200000 },
  { month: "Feb", ingresos: 5100000, gastos: 3800000 },
  { month: "Mar", ingresos: 4800000, gastos: 3500000 },
  { month: "Abr", ingresos: 6000000, gastos: 4200000 },
  { month: "May", ingresos: 5500000, gastos: 3900000 },
  { month: "Jun", ingresos: 6800000, gastos: 5100000 },
];

export const categoryData = [
  { name: "Entretenimiento", value: 1200000 },
  { name: "Supermercado", value: 2300000 },
  { name: "Transporte", value: 800000 },
  { name: "Restaurantes", value: 1500000 },
  { name: "Servicios", value: 950000 },
];

export const productData = [
  { name: "Cuenta Corriente", usuarios: 3500 },
  { name: "Cuenta Vista", usuarios: 5200 },
  { name: "Tarjeta Crédito", usuarios: 2800 },
  { name: "Crédito Personal", usuarios: 1200 },
  { name: "Hipotecario", usuarios: 950 },
];
