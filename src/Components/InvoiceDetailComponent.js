// InvoiceDetailComponent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Paper } from '@mui/material';

const InvoiceDetailComponent = ({ addInvoice, updateInvoice, deleteInvoice, invoices }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isCreateMode = id === '0';

  const [invoice, setInvoice] = useState({
    invoiceNumber: '',
    date: '',
    customerName: '',
    billingAddress: '',
    shippingAddress: '',
    totalAmount: 0,
    items: [],
    billSundrys: [],
  });

  useEffect(() => {
    if (!isCreateMode && invoices) {
      const existingInvoice = invoices.find((inv) => inv.id === Number(id));
      if (existingInvoice) setInvoice(existingInvoice);
    }
  }, [id, isCreateMode, invoices]);

  const handleChange = (field) => (e) => setInvoice({ ...invoice, [field]: e.target.value });

  const handleSave = () => {
    if (isCreateMode) {
      addInvoice(invoice);
    } else if (updateInvoice) {  // Ensure updateInvoice is defined before calling
      updateInvoice(invoice);
    }
    navigate('/invoices');
  };

  const handleDelete = () => {
    if (deleteInvoice) {
      deleteInvoice(invoice.id);
    }
    navigate('/invoices');
  };

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">{isCreateMode ? 'Create Invoice' : 'Edit Invoice'}</Typography>
      <TextField
        label="Customer Name"
        fullWidth
        required
        value={invoice.customerName}
        onChange={handleChange('customerName')}
      />
      <TextField
        label="Date"
        type="date"
        fullWidth
        required
        InputLabelProps={{ shrink: true }}
        value={invoice.date}
        onChange={handleChange('date')}
      />
      <TextField
        label="Total Amount"
        type="number"
        fullWidth
        required
        value={invoice.totalAmount}
        onChange={handleChange('totalAmount')}
      />
      {isCreateMode ? (
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      ) : (
        <>
          <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
          <Button onClick={handleDelete} variant="outlined" color="secondary">Delete</Button>
        </>
      )}
    </Paper>
  );
};

export default InvoiceDetailComponent;
