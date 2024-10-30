// src/data/invoicesData.js
export const invoicesData = [
    {
      id: '1',
      date: '2023-10-20',
      invoiceNumber: 1001,
      customerName: 'ABC Corp',
      billingAddress: '123 Street',
      shippingAddress: '456 Avenue',
      gstin: '22AAAAA0000A1Z5',
      items: [{ id: '1', itemName: 'Widget', quantity: 10, price: 5, amount: 50 }],
      billSundrys: [{ id: '1', billSundryName: 'Shipping', amount: 10 }],
      totalAmount: 60,
    },
  ];
  