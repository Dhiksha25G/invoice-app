// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceList from './Components/InvoiceList';
import InvoiceDetail from './Components/InvoiceDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/invoice/:id" element={<InvoiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
