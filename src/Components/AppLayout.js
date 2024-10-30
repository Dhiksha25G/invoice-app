// src/components/AppLayout.js
import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => (
  <div>
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Invoice Application</Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Toolbar />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Invoices" />
        </ListItem>
      </List>
    </Drawer>
    <main style={{ marginLeft: 240, padding: '1rem' }}>{children}</main>
  </div>
);

export default AppLayout;
