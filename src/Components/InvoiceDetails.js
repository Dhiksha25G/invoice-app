// src/components/InvoiceDetail.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { invoicesData } from '../InvoiceData';

const InvoiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = id !== '0';
  const invoice = isEditMode ? invoicesData.find((inv) => inv.id === id) : {};

  const [form, setForm] = useState(invoice || { items: [], billSundrys: [] });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save logic here
    navigate('/');
  };

  return (
    <Paper sx={{ padding: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Customer Name" name="customerName" value={form.customerName || ''} onChange={handleChange} required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Invoice Date" name="date" type="date" value={form.date || ''} onChange={handleChange} required />
        </Grid>
        {/* Additional fields here */}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSave}>
        {isEditMode ? 'Save Changes' : 'Create Invoice'}
      </Button>
    </Paper>
  );
};

export default InvoiceDetail;
