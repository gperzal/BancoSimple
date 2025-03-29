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