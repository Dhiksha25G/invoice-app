// AppComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import InvoiceListComponent from './InvoiceListComponent';
import InvoiceDetailComponent from './InvoiceDetailComponent';

const drawerWidth = 240; // Adjust the width to make the content more visible

function AppComponent() {
  const [invoices, setInvoices] = useState([]);

  const addInvoice = (newInvoice) => {
    setInvoices([...invoices, { ...newInvoice, id: Date.now() }]);
  };

  const updateInvoice = (updatedInvoice) => {
    setInvoices(invoices.map(invoice => (invoice.id === updatedInvoice.id ? updatedInvoice : invoice)));
  };

  const deleteInvoice = (id) => {
    setInvoices(invoices.filter(invoice => invoice.id !== id));
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1300 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Invoice Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f3e5f5', // Light background color for the drawer
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/invoices">
            <ListItemText primary="Invoices" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ marginLeft: drawerWidth, padding: '80px 20px 20px' }}>
        <Routes>
          <Route path="/invoices" element={<InvoiceListComponent invoices={invoices} />} />
          <Route
            path="/invoice/:id"
            element={<InvoiceDetailComponent addInvoice={addInvoice} updateInvoice={updateInvoice} deleteInvoice={deleteInvoice} invoices={invoices} />}
          />
          <Route path="/invoice/0" element={<InvoiceDetailComponent addInvoice={addInvoice} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppComponent;
