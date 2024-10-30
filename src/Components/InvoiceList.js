// src/components/InvoiceList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, TablePagination } from '@mui/material';
import { invoicesData } from '../InvoiceData'; // Mock data

const InvoiceList = () => {
  const navigate = useNavigate();

  return (
    <Paper>
      <Button variant="contained" color="primary" onClick={() => navigate('/invoice/0')}>
        Add Invoice
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Customer Name</TableCell>
              <TableCell>Total Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoicesData.map((invoice) => (
              <TableRow key={invoice.id} onClick={() => navigate(`/invoice/${invoice.id}`)}>
                <TableCell>{invoice.invoiceNumber}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.customerName}</TableCell>
                <TableCell>{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination rowsPerPageOptions={[5, 10, 25]} component="div" count={invoicesData.length} rowsPerPage={5} page={0} />
      </TableContainer>
    </Paper>
  );
};

export default InvoiceList;
